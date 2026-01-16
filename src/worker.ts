/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRequire } from 'module';
import { dirname } from 'path';
import { pathToFileURL } from 'url';
import { parentPort } from 'worker_threads';

// Bundled prettier as fallback when local isn't available
import * as bundledPrettier from 'prettier';

if (!parentPort) {
    throw new Error('Worker must be spawned with parentPort');
}

function log(message: string) {
    parentPort?.postMessage({ type: 'log', message });
}

parentPort.on('message', async (message) => {
    const { id, data } = message;
    try {
        const result = await format(data);
        parentPort?.postMessage({ id, result });
    } catch (error: unknown) {
        parentPort?.postMessage({
            id,
            error: {
                message: error instanceof Error ? error.message : String(error),
                stack: error instanceof Error ? error.stack : undefined,
                name: error instanceof Error ? error.name : 'Error'
            }
        });
    }
});

/**
 * Format text using ESLint (v9+ flat config) and Prettier.
 * Falls back to Prettier-only if ESLint is unavailable.
 */
async function format({
    text, filePath, extensionConfig, logLevel
}: any) {
    if (logLevel === 'trace') {
        log(`[Worker] Processing ${filePath}`);
    }

    const req = createRequire(filePath);

    // Load prettier - prefer local, fallback to bundled
    let prettier: any;
    try {
        const prettierPath = req.resolve('prettier');
        const importedPrettier = await import(pathToFileURL(prettierPath).toString());
        prettier = importedPrettier.default || importedPrettier;
        if (logLevel === 'trace') log(`[Worker] Using local Prettier from '${prettierPath}'`);
    } catch (e) {
        if (logLevel === 'trace') log('[Worker] Using bundled Prettier (fallback)');
        prettier = bundledPrettier;
    }

    // Normalize prettier import (handle different export formats)
    if (typeof prettier.resolveConfig !== 'function' && prettier.default && typeof prettier.default.resolveConfig === 'function') {
        prettier = prettier.default;
    }

    if (typeof prettier.resolveConfig !== 'function') {
        const keys = Object.keys(prettier || {});
        log(`[Worker] Prettier object structure: ${keys.join(', ')}`);
        throw new Error(`Prettier.resolveConfig is not a function. Keys: ${keys.join(', ')}`);
    }

    // Resolve prettier config and plugins
    const prettierInfo = await prettier.resolveConfig(filePath) || {};

    if (prettierInfo && Array.isArray(prettierInfo.plugins)) {
        if (logLevel === 'trace') log(`[Worker] Prettier plugins found: ${prettierInfo.plugins.join(', ')}`);

        let configFile: string | null = null;
        try {
            configFile = await prettier.resolveConfigFile(filePath);
        } catch { /* ignore */ }

        prettierInfo.plugins = prettierInfo.plugins.map((plugin: string | any) => {
            if (typeof plugin === 'string') {
                try {
                    const resolvedPath = req.resolve(plugin);
                    if (logLevel === 'trace') log(`[Worker] Resolved plugin '${plugin}' to '${resolvedPath}'`);
                    return resolvedPath;
                } catch (e: any) {
                    // Try resolving relative to config file
                    if (configFile) {
                        try {
                            const configReq = createRequire(configFile);
                            const resolvedPath = configReq.resolve(plugin);
                            if (logLevel === 'trace') log(`[Worker] Resolved plugin '${plugin}' relative to config to '${resolvedPath}'`);
                            return resolvedPath;
                        } catch (e2: any) {
                            if (logLevel === 'trace') log(`[Worker] Failed to resolve plugin '${plugin}' relative to config: ${e2.message}`);
                        }
                    }
                    if (logLevel === 'trace') log(`[Worker] Failed to resolve plugin '${plugin}': ${e.message}`);
                    return plugin; // Fallback to original string
                }
            }
            return plugin;
        });
    }

    const prettierOptions = { ...prettierInfo, filepath: filePath };
    const prettierLast = extensionConfig?.prettierLast;

    // Try to load ESLint for full formatting
    let eslintModule: any = null;
    let eslintLoadError: string | null = null;

    try {
        const eslintPath = req.resolve('eslint');
        if (logLevel === 'trace') log(`[Worker] Resolved eslint to '${eslintPath}'`);
        eslintModule = await import(pathToFileURL(eslintPath).toString());
    } catch (e: unknown) {
        eslintLoadError = e instanceof Error ? e.message : String(e);
        if (logLevel === 'trace') log(`[Worker] ESLint not found: ${eslintLoadError}`);
    }

    // Check for modern ESLint (v9+ with flat config support)
    const isModernESLint = eslintModule && !eslintModule.CLIEngine;

    // If no ESLint or legacy ESLint, fall back to Prettier-only
    if (!isModernESLint) {
        // Only log in trace mode - this is expected for files outside ESLint projects
        if (logLevel === 'trace') {
            if (eslintLoadError) {
                log(`[Worker] ESLint unavailable (${eslintLoadError}), using Prettier-only mode`);
            } else if (eslintModule?.CLIEngine) {
                log('[Worker] Legacy ESLint detected (pre-v9), using Prettier-only mode');
            } else {
                log('[Worker] ESLint not found, using Prettier-only mode');
            }
        }

        // Prettier-only fallback
        return await prettier.format(text, prettierOptions);
    }

    if (logLevel === 'trace') log('[Worker] Detected Modern ESLint (v9+)');
    if (logLevel === 'trace') log(`[Worker] ESLint module keys: ${Object.keys(eslintModule || {}).join(', ')}`);

    // Load ESLint class
    const { loadESLint, ESLint } = eslintModule;
    let ESLintClass = ESLint;

    if (loadESLint) {
        try {
            ESLintClass = await loadESLint({ useFlatConfig: true });
            if (logLevel === 'trace') log('[Worker] Loaded ESLint class via loadESLint({ useFlatConfig: true })');
        } catch(e: any) {
            if (logLevel === 'trace') log(`[Worker] loadESLint failed: ${e.message}`);
        }
    }

    // Use file directory as CWD to ensure config lookup starts from the right place
    const fileDir = dirname(filePath);
    if (logLevel === 'trace') log(`[Worker] Initializing ESLint with cwd: ${fileDir}`);

    let currentText = text;

    // Format: Prettier first (default) or ESLint first (prettierLast mode)
    if (!prettierLast) {
        try {
            currentText = await prettier.format(currentText, prettierOptions);
        } catch (e: any) {
            log(`[Worker] Prettier formatting failed: ${e.message}`);
            throw new Error(`Prettier formatting failed: ${e.message}`);
        }
    }

    // Run ESLint with fix
    try {
        const eslint = new ESLintClass({ fix: true, cwd: fileDir });
        const results = await eslint.lintText(currentText, { filePath });
        const result = results[0];

        if (result && result.output) {
            currentText = result.output;
            if (logLevel === 'trace') log('[Worker] ESLint applied fixes');
        } else if (logLevel === 'trace') {
            log('[Worker] ESLint found no issues to fix');
        }
    } catch (e: any) {
        // ESLint failed - log the error but continue with Prettier result
        log(`[Worker] ESLint failed: ${e.message}`);

        // Check for common error patterns and provide helpful messages
        if (e.message.includes('Cannot find module')) {
            const moduleMatch = e.message.match(/Cannot find module ['"](.*?)['"]/);
            const missingModule = moduleMatch ? moduleMatch[1] : 'unknown';
            log(`[Worker] Missing ESLint dependency: ${missingModule}. Install it or check your eslint.config.js`);
        }

        // Don't throw - return Prettier-formatted text as fallback
        log('[Worker] Falling back to Prettier-only output');
    }

    // Run Prettier last if configured
    if (prettierLast) {
        try {
            currentText = await prettier.format(currentText, prettierOptions);
        } catch (e: any) {
            log(`[Worker] Prettier formatting failed: ${e.message}`);
            throw new Error(`Prettier formatting failed: ${e.message}`);
        }
    }

    return currentText;
}
