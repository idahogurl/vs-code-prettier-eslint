const vscode = require('vscode');
const path = require('path');
const formatter = require('./formatter');

vscode.languages.registerDocumentFormattingEditProvider('javascript', {
    provideDocumentFormattingEdits(document) {
        const text = document.getText();
        const workspaceFolder = path.dirname(document.fileName);

        try {
            const formatted = formatter(text, workspaceFolder);
            const firstLine = document.lineAt(0);
            return [vscode.TextEdit.replace(firstLine.range.start, formatted)];
        } catch (err) {
            console.log(err.message);
        }
    }
});