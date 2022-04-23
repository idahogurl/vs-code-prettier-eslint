import format from 'prettier-eslint';

export default function formatText({ text, filePath }) {
  return format({
    text,
    filePath,
  });
}
