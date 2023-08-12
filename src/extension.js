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
       * In some case, user cannot format his/her codes because of the error
       * "cannot find module @typescript-eslint/parser".
       *
       * In order to solve this problem, firstly take a try to search
       * "@typescript-eslint/parser" in node_modules of user's work directory.
       *
       * If find it successfully, intercept the `require.resolve` to redirect
       * the resolved path.
       */
      try {
        const typescriptEslintParserPath = require.resolve('@typescript-eslint/parser', {
          paths: [path.join(workspaceDir, 'temp.js')],
        });

        require.resolve = function resolve(...args) {
          const [moduleName] = args;
          if (moduleName && moduleName === '@typescript-eslint/parser') return typescriptEslintParserPath;
          return rawResolve(...args);
        };
      } catch (error) {
        /** do nothing, just follow default action of require.resolve * */
      }

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
