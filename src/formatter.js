import format from 'prettier-eslint';

export default function formatText({ text, filePath }) {
  return format({
    logLevel: 'debug',
    text,
    filePath,
  });
}
