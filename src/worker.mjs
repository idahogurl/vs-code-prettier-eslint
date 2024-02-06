import { isAbsolute } from 'path';
import { runAsWorker } from 'synckit';
import { pathToFileURL } from 'url';

runAsWorker(
  /**
   * @param {{
   *   text: string;
   *   prettierEslintPath: string;
   *   filePath: string;
   *   extensionConfig?: {
   *     prettierLast?: boolean;
   *   }
   * }}
   */
  async ({
    text, prettierEslintPath, filePath, extensionConfig,
  }) => {
    const format = /** @type {typeof import('prettier-eslint')} */ (
      (await import(isAbsolute(prettierEslintPath) ? pathToFileURL(prettierEslintPath) : prettierEslintPath)).default
    );
    return format({
      text,
      filePath,
      logLevel: 'info',
      prettierLast: extensionConfig?.prettierLast,
    });
  },
);
