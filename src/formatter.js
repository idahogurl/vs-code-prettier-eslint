import format from 'prettier-eslint';

export default function formatText({ text, filePath }) {
  const formatted = format({
    text,
    filePath,
  });

  return formatted;
}
