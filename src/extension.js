/* eslint-disable import/no-unresolved */
/**
 * @typedef {import('vscode')}
 */

import {
  languages, window, TextEdit, Range, workspace,
} from 'vscode';

import format from './formatter';
import { isFilePathMatchedByEslintIgnore, isFilePathMatchedByPrettierIgnore } from './ignore';

const path = require('path');

const rawResolve = require.resolve;

let outputChannel;

async function formatter(document) {
  const documentPath = path.dirname(document.fileName);
  const workspaceDir = workspace?.workspaceFolders.find((w) => documentPath.startsWith(w.uri.path))
    ?.uri.path;
  try {
    if (
      isFilePathMatchedByEslintIgnore(document.fileName, workspaceDir)
      || isFilePathMatchedByPrettierIgnore(document.fileName, workspaceDir)
      // eslint-disable-next-line no-empty
    ) {
      console.log('File ignored.');
      outputChannel.appendLine('File ignored. Matches entry in .eslintignore or .prettierignore');
    } else {
      const startLine = document.lineAt(0);
      const endLine = document.lineAt(document.lineCount - 1);
      const range = new Range(startLine.range.start, endLine.range.end);

      const text = document.getText(range);
      const extensionConfig = workspace?.getConfiguration('vs-code-prettier-eslint');

      /**
       * In some case, user cannot format his/her codes and the error
       * is "cannot find module XXX".
       *
       * The reason is easy.This project depends on `prettier-eslint` which
       * uses require.resolve API to search a module path, unfortunately, it
       * doesn't search a module path under "<user_workspace>/node_modules" as
       * expected.
       *
       * To fix this bug, before we call `format`, we rewrite require.resolve,
       * and take a try to search module path under "<user_workspace>/node_modules"
       * firstly.When `format` is finished, restore require.resolve.
       */

      require.resolve = function resolve(...args) {
        const [moduleName] = args;
        let modulePath = '';
        try {
          modulePath = rawResolve(moduleName, { paths: [workspaceDir] });
        } catch (err) {
          modulePath = rawResolve(...args);
        }
        return modulePath;
      };

      const formatted = await format({
        text,
        filePath: document.fileName,
        extensionConfig,
      });

      return [TextEdit.replace(range, formatted)];
    }
  } catch (err) {
    outputChannel.appendLine(`Error: ${err.message} \n${err.stack}`);
  } finally {
    require.resolve = rawResolve;
  }
}

const formattingProvider = {
  provideDocumentRangeFormattingEdits(document) {
    return formatter(document);
  },
};

const supportedLanguages = [
  'css',
  'graphql',
  'html',
  'javascript',
  'javascriptreact',
  'json',
  'jsonc',
  'less',
  'markdown',
  'mdx',
  'scss',
  'svelte',
  'typescript',
  'typescriptreact',
  'vue',
  'yaml',
];

supportedLanguages.forEach((language) => {
  languages.registerDocumentRangeFormattingEditProvider(language, formattingProvider);
});

// Create output channel for error logging
outputChannel = window.createOutputChannel('Prettier Eslint');
