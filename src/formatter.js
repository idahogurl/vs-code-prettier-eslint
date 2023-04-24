import format from 'prettier-eslint';
import fs from 'fs';

export default function formatText({ text, filePath, extensionConfig }) {
  return format({
    text,
    filePath,
    prettierLast: extensionConfig?.prettierLast || false,
    eslintConfig: extensionConfig?.eslintConfigPath ? JSON.parse(fs.readFileSync(extensionConfig?.eslintConfigPath)) : null
  });
}
