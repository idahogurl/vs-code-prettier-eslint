/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import {
  languages, window, TextEdit,
} from 'vscode';

import format from './formatter';

let outputChannel;

function formatter(document, range) {
  try {
    const text = document.getText(range);
    const formatted = format({
      text,
      filePath: document.fileName,
    });
    return [TextEdit.replace(range, formatted)];
  } catch (err) {
    outputChannel.appendLine(`Error: ${err.message}`);
  }
}

const formattingProvider = {
  provideDocumentRangeFormattingEdits(document, range) {
    return formatter(document, range);
  },
};

languages.registerDocumentRangeFormattingEditProvider('javascript', formattingProvider);
languages.registerDocumentRangeFormattingEditProvider('javascriptreact', formattingProvider);
languages.registerDocumentRangeFormattingEditProvider('typescript', formattingProvider);
languages.registerDocumentRangeFormattingEditProvider('typescriptreact', formattingProvider);

// Create output channel for error logging
outputChannel = window.createOutputChannel('Prettier Eslint');
