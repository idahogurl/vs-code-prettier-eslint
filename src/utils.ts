import * as vscode from 'vscode';

/**
 * Gets the configuration for the extension
 */
export function getConfig() {
    return vscode.workspace.getConfiguration('prettier-eslint-modern');
}
