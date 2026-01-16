import { window, OutputChannel } from 'vscode';

let outputChannel: OutputChannel | undefined;

export function registerErrorHandler(channel: OutputChannel) {
    outputChannel = channel;
}

/**
 * Shows and focuses the extension's output channel
 */
export function showOutputChannel() {
    outputChannel?.show(true);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logError(message: string, error?: any) {
    if (outputChannel) {
        outputChannel.appendLine(`[Error] ${message}`);
        if (error) {
            outputChannel.appendLine(error.stack || error.message || String(error));
        }
    }
    console.error(message, error);
}

export function logInfo(message: string) {
    if (outputChannel) {
        outputChannel.appendLine(`[Info] ${message}`);
    }
    console.log(message);
}

export function showErrorMessage(message: string) {
    window.showErrorMessage(message);
}
