import {
  languages, window, workspace, Range, TextEdit,
} from 'vscode';

import format from './formatter';

let outputChannel;

function formatter(document, range) {
  try {
    const workspaceFolder = workspace.getWorkspaceFolder(document.uri).uri.fsPath;
    const extensionConfig = workspace.getConfiguration('vs-code-prettier-eslint', document.uri);

    const text = document.getText(range);
    const formatted = format({
      text,
      filePath: document.fileName,
      workspaceFolder,
      ...extensionConfig,
    });
    return [TextEdit.replace(range, formatted)];
  } catch (err) {
    outputChannel.appendLine(`Error: ${err.message}`);
  }
}

languages.registerDocumentFormattingEditProvider(
  'javascript',
  {
    provideDocumentFormattingEdits(document) {
      // Extension needs at least one opened folder in a workspace
      if (!workspace.workspaceFolders) {
        window.showErrorMessage('Prettier Eslint formatter requires a folder or workspace to be opened.');
        return null;
      }
      const firstLine = document.lineAt(0);
      const lastLine = document.lineAt(document.lineCount - 1);
      const range = new Range(firstLine.range.start, lastLine.range.end);
      return formatter(document, range);
    },
  },
);
languages.registerDocumentRangeFormattingEditProvider(
  'javascript',
  {
    provideDocumentRangeFormattingEdits(document, range) {
      // Extension needs at least one opened folder in a workspace
      if (!workspace.workspaceFolders) {
        window.showErrorMessage('Prettier Eslint formatter requires a folder or workspace to be opened.');
        return null;
      }
      return formatter(document, range);
    },
  },
);

// Create output channel for error logging
outputChannel = window.createOutputChannel('Prettier Eslint');
