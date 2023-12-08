import fs from 'fs';
import path from 'path';
import { findUpSync } from 'find-up';
import nodeIgnore from 'ignore';

const LINE_SEPARATOR_REGEX = /(\r|\n|\r\n)/;

function getIsIgnored(filename) {
  const ignoreLines = fs
    .readFileSync(filename, 'utf8')
    .split(LINE_SEPARATOR_REGEX)
    .filter((line) => Boolean(line.trim()));
  const instance = nodeIgnore();
  instance.add(ignoreLines);
  return instance.ignores.bind(instance);
}

export default function isFilePathMatchedByIgnore(filePath, workspaceDirectory, ignoreFileName) {
  const options = { cwd: path.dirname(filePath) };
  if (workspaceDirectory) {
    options.stopAt = workspaceDirectory;
  }
  const ignorePath = findUpSync(ignoreFileName, options);
  if (!ignorePath) {
    return false;
  }

  const ignoreDir = path.dirname(ignorePath);
  const filePathRelativeToIgnoreDir = path.relative(ignoreDir, filePath);
  const isIgnored = getIsIgnored(ignorePath);
  return isIgnored(filePathRelativeToIgnoreDir);
}
