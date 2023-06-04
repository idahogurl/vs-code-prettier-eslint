import format from 'prettier-eslint';

export default function formatText({ text, filePath, extensionConfig }) {
  return format({
    text,
    filePath,
    prettierLast: extensionConfig?.prettierLast || false,
    eslintConfig: {
      overrideConfigFile: extensionConfig?.eslintConfigPath || null,
    },
  });
}
