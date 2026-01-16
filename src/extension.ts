import * as path from 'path';
import { ExtensionContext, StatusBarAlignment, languages, window } from 'vscode';
import { PrettierEditProvider } from './PrettierEditProvider';
import { WorkerManager } from './WorkerManager';
import { logError, logInfo, registerErrorHandler } from './errorHandler';

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

export function activate(context: ExtensionContext) {
    console.log('Prettier ESLint: activate() called');
    const outputChannel = window.createOutputChannel('Prettier ESLint Formatter');
    context.subscriptions.push(outputChannel);
    registerErrorHandler(outputChannel);
    
    logInfo('[activate] Activating Prettier ESLint Formatter extension...');
    
    const statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, -1);
    statusBarItem.text = "Prettier ESLint";
    context.subscriptions.push(statusBarItem);

    // Initialize Worker Manager
    const workerPath = path.join(__dirname, 'worker.mjs');
    const workerManager = new WorkerManager(workerPath);
    
    // Attempt to start worker early
    try {
        workerManager.start();
    } catch(e: unknown) {
        logError(`[activate] Worker pre-start failed: ${e instanceof Error ? e.message : String(e)}`);
    }

    const provider = new PrettierEditProvider(workerManager, statusBarItem);

    supportedLanguages.forEach((language) => {
        const disposable = languages.registerDocumentRangeFormattingEditProvider(language, provider);
        context.subscriptions.push(disposable);
    });
    
    logInfo(`[activate] Registered formatters for: ${supportedLanguages.join(', ')}`);
    
    // Warmup in background
    warmUpWorker(workerManager);
}

async function warmUpWorker(workerManager: WorkerManager) {
    if (!window.activeTextEditor || !supportedLanguages.includes(window.activeTextEditor.document.languageId)) return;

    const document = window.activeTextEditor.document;
    logInfo(`[warmup] Warming up worker for ${document.fileName}`);

    try {
        await workerManager.format({
            text: '',
            filePath: document.fileName,
            logLevel: 'warn'
        });
        logInfo('[warmup] Worker has been warmed up');
    } catch (error: unknown) {
        logError(`[warmup] Error: Could not warm up worker: ${error instanceof Error ? error.message : String(error)}`);
    }
}

export function deactivate() {
    console.log('Prettier ESLint: deactivate() called');
}
