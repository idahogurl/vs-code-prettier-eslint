/* eslint-disable import/no-unresolved */
/**
 * @typedef {import('vscode')}
 */

import {
  languages, window, TextEdit, Range, workspace,
} from 'vscode';
import * as path from 'path';
import { createSyncFn } from 'synckit';
import requireRelative from 'require-relative';

import isFilePathMatchedByIgnore from './ignore';

const outputChannel = window.createOutputChannel('Prettier Eslint'); // create output channel for error logging
const formatText = createSyncFn(require.resolve('./worker.mjs'));

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
 * @returns {TextEdit[]} - Formatted text edits.
 */
function formatter(document) {
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

    const formatted = formatText({
      text,
      prettierEslintPath: getModulePath(document.fileName, 'prettier-eslint'),
      filePath: document.fileName,
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

/**
 * Provides a promise that resolves as soon as there is an active text editor
 * with a document open on a language this extension supports.
 *
 * @returns {Promise<TextDocument>}
 */
function waitForActiveSupportedDocument() {
  if (
    !window.activeTextEditor
    || !supportedLanguages.includes(window.activeTextEditor.document.languageId)
  ) {
    return new Promise((resolve) => {
      const handler = window.onDidChangeActiveTextEditor((editor) => {
        if (editor && supportedLanguages.includes(editor.document.languageId)) {
          handler.dispose();
          resolve(editor.document);
        }
      });
    });
  }

  return Promise.resolve(window.activeTextEditor.document);
}

/**
 * Warms up the worker by running 'prettier-eslint' with some dummy data.
 *
 * @param {TextDocument} document - Used to resolve 'prettier-eslint', as well as needed
 * by 'prettier-eslint' to resolve its internal dependencies (eslint and prettier).
 */
async function warmUpWorker(document) {
  const prettierEslintPath = getModulePath(document.fileName, 'prettier-eslint');

  formatText({
    text: '',
    prettierEslintPath,
    filePath: document.fileName,
  });
}

supportedLanguages.forEach((language) => {
  languages.registerDocumentRangeFormattingEditProvider(language, {
    provideDocumentRangeFormattingEdits(document) {
      return formatter(document);
    },
  });
});

waitForActiveSupportedDocument()
  .then((document) => warmUpWorker(document))
  .then(() => {
    outputChannel.appendLine('Worker has been warmed up');
  })
  .catch((error) => {
    outputChannel.appendLine(
      `Error: Could not warm up worker. Formatting a file for the first time may take longer than usual.\nMessage: ${error.message}\nStacktrace: ${error.stack}`,
    );
  });
