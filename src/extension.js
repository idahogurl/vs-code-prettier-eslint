/* eslint-disable import/no-unresolved */
import {
  languages, window, TextEdit, workspace,
} from 'vscode';

import format from './formatter';
import { isFilePathMatchedByEslintIgnore, isFilePathMatchedByPrettierIgnore } from './ignore';

const path = require('path');

let outputChannel;

async function formatter(document, range) {
  const documentPath = path.dirname(document.fileName);
  const workspaceDir = workspace?.workspaceFolders.find((w) => w.uri.path === documentPath)?.uri
    .path;
  try {
    if (
      isFilePathMatchedByEslintIgnore(document.fileName, workspaceDir)
      || isFilePathMatchedByPrettierIgnore(document.fileName, workspaceDir)
      // eslint-disable-next-line no-empty
    ) {
      console.log('File ignored.');
      outputChannel.appendLine('File ignored. Matches entry in .eslintignore or .prettierignore');
    } else {
      const text = document.getText(range);
      const formatted = await format({
        text,
        filePath: document.fileName,
      });
      return [TextEdit.replace(range, formatted)];
    }
  } catch (err) {
    outputChannel.appendLine(`Error: ${err.message} \n${err.stack}`);
  }
}

const formattingProvider = {
  provideDocumentRangeFormattingEdits(document, range) {
    return formatter(document, range);
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
