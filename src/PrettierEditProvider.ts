import * as vscode from 'vscode';
import { WorkerManager } from './WorkerManager';
import { logError, logInfo, showOutputChannel } from './errorHandler';
import { isFilePathMatchedByIgnore } from './ignoreFileHandler';
import { getConfig } from './utils';

export class PrettierEditProvider implements vscode.DocumentRangeFormattingEditProvider {
    private workerManager: WorkerManager;
    private statusBarItem: vscode.StatusBarItem;

    constructor(workerManager: WorkerManager, statusBarItem: vscode.StatusBarItem) {
        this.workerManager = workerManager;
        this.statusBarItem = statusBarItem;
    }

    async provideDocumentRangeFormattingEdits(
        document: vscode.TextDocument,
        range: vscode.Range,
    ): Promise<vscode.TextEdit[]> {
        logInfo(`[formatter] Triggered for: ${document.fileName}`);
        const workspaceDir = vscode.workspace.getWorkspaceFolder(document.uri)?.uri.fsPath;

        try {
            const isEslintIgnored = await isFilePathMatchedByIgnore(document.fileName, workspaceDir, '.eslintignore');
            if (isEslintIgnored) {
                logInfo(`[formatter] File ${document.fileName} is ignored by ESLint.`);
                return [];
            }

            const isPrettierIgnored = await isFilePathMatchedByIgnore(document.fileName, workspaceDir, '.prettierignore');
            if (isPrettierIgnored) {
                logInfo(`[formatter] File ${document.fileName} is ignored by Prettier.`);
                return [];
            }

            const text = document.getText(range);
            const prettierLast = getConfig().get('prettierLast');

            this.statusBarItem.text = "$(sync~spin) Prettier ESLint";
            this.statusBarItem.show();
            logInfo(`[formatter] Formatting started...`);

            const formatted = await this.workerManager.format({
                text,
                filePath: document.fileName,
                extensionConfig: { prettierLast },
                logLevel: 'trace'
            });

            this.statusBarItem.text = "$(check) Prettier ESLint";
            logInfo(`[formatter] Formatting completed.`);
            setTimeout(() => this.statusBarItem.hide(), 2000);

            return [vscode.TextEdit.replace(range, formatted)];
        } catch (err: unknown) {
            this.statusBarItem.text = "$(alert) Prettier ESLint";
            this.statusBarItem.show();
            logError(`[formatter] Error: ${err instanceof Error ? err.message : String(err)}`, err);
            
            vscode.window.showErrorMessage("Prettier ESLint: Formatting failed", "Show Output").then(selection => {
                if (selection === "Show Output") {
                    showOutputChannel();
                }
            });
            return [];
        }
    }
}