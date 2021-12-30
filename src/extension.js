/* eslint-disable import/no-unresolved */
import { languages, window, TextEdit } from 'vscode';

import format from './formatter';
import { isFilePathMatchedByEslintignore, isFilePathMatchedByPrettierignore } from './ignore';

let outputChannel;

function formatter(document, range) {
  try {
    if (
      isFilePathMatchedByEslintignore(document.fileName)
      || isFilePathMatchedByPrettierignore(document.fileName)
      // eslint-disable-next-line no-empty
    ) {
      console.log('File ignored.');
      outputChannel.appendLine('File ignored. Matches entry in .eslintignore or .prettierignore');
    } else {
      const text = document.getText(range);
      const formatted = format({
        text,
        filePath: document.fileName,
      });
      return [TextEdit.replace(range, formatted)];
    }
  } catch (err) {
    outputChannel.appendLine(`Error: ${err.message}`);
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
