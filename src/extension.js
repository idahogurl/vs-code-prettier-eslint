/* eslint-disable import/no-unresolved */
/**
 * @typedef {import('vscode')}
 */

import {
  languages, window, TextEdit, Range, workspace,
} from 'vscode';
import { Worker } from 'worker_threads';
import * as path from 'path';
import requireRelative from 'require-relative';

import isFilePathMatchedByIgnore from './ignore';

let outputChannel;

/**
 * Starts a new worker with the given file path and worker data.
 * @param {string} filePath - The file path of the worker script.
 * @param {any} workerData - The data to pass to the worker.
 * @returns {Promise<any>} A promise that resolves with the worker's response message.
 */
function startWorker(filePath, workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(filePath, { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
  });
}

/**
 * Resolves the path of a module relative to a file path.
 * @param {string} filePath - The file path to resolve the module path relative to.
 * @param {string} moduleName - The name of the module to resolve.
 * @returns {string} - The resolved module path.
 */
function getModulePath(filePath, moduleName) {
  try {
    return requireRelative.resolve(moduleName, filePath);
  } catch (error) {
    return require.resolve(moduleName);
  }
}

/**
 * Formats the given document using 'prettier-eslint' package.
 * If the document is ignored by either Prettier or ESLint,
 * logs a message to the console and does nothing.
 * @param {TextDocument} document - The document to format.
 * @returns {Promise<TextEdit[]>} - A promise that resolves with the formatted text edits.
 */
async function formatter(document) {
  const documentPath = path.dirname(document.fileName);

  const workspaceDir = workspace?.workspaceFolders.find((w) => documentPath.startsWith(w.uri.path))
    ?.uri.path;

  try {
    if (isFilePathMatchedByIgnore(document.fileName, workspaceDir, '.eslintignore')) {
      outputChannel.appendLine(`File ${document.fileName} is ignored by ESLint.`);
      return [];
    }

    if (isFilePathMatchedByIgnore(document.fileName, workspaceDir, '.prettierignore')) {
      outputChannel.appendLine(`File ${document.fileName} is ignored by Prettier.`);
      return [];
    }
    const startLine = document.lineAt(0);
    const endLine = document.lineAt(document.lineCount - 1);
    const range = new Range(startLine.range.start, endLine.range.end);

    const text = document.getText(range);
    const prettierLast = workspace.getConfiguration('vs-code-prettier-eslint').get('prettierLast');
    const formatted = await startWorker(path.join(__dirname, './worker/index.js'), {
      text,
      prettierEslintPath: getModulePath(document.fileName, 'prettier-eslint'),
      filePath: document.fileName,
      // parameters passed to the worker must be serializable
      // and the value from 'workspace.getConfiguration()' is not.
      extensionConfig: { prettierLast },
    });
    return [TextEdit.replace(range, formatted)];
  } catch (err) {
    outputChannel.appendLine(`Error: ${err.message} \n${err.stack}`);
  }
}

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
  languages.registerDocumentRangeFormattingEditProvider(language, {
    provideDocumentRangeFormattingEdits(document) {
      return formatter(document);
    },
  });
});

// Create output channel for error logging
outputChannel = window.createOutputChannel('Prettier Eslint');
