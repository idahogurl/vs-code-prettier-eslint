import {
  languages, window, Range, TextEdit,
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

languages.registerDocumentFormattingEditProvider('javascript', {
  provideDocumentFormattingEdits(document) {
    const firstLine = document.lineAt(0);
    const lastLine = document.lineAt(document.lineCount - 1);
    const range = new Range(firstLine.range.start, lastLine.range.end);
    return formatter(document, range);
  },
});
languages.registerDocumentRangeFormattingEditProvider('javascript', {
  provideDocumentRangeFormattingEdits(document, range) {
    return formatter(document, range);
  },
});

// Create output channel for error logging
outputChannel = window.createOutputChannel('Prettier Eslint');
