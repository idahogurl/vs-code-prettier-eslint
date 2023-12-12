import fs from 'fs';
import path from 'path';
import { findUpSync } from 'find-up';
import nodeIgnore from 'ignore';

const LINE_SEPARATOR_REGEX = /(\r|\n|\r\n)/;

/**
 * Returns a function that checks if a given filename is ignored based on the contents of a file.
 * @param {string} filename - The path to the file containing the ignore patterns.
 * @returns {Function} - A function that takes a filename as input and returns true if it is ignored, false otherwise.
 */
function getIsIgnored(filename) {
  const ignoreLines = fs
    .readFileSync(filename, 'utf8')
    .split(LINE_SEPARATOR_REGEX)
    .filter((line) => Boolean(line.trim()));
  const instance = nodeIgnore();
  instance.add(ignoreLines);
  return instance.ignores.bind(instance);
}

/**
 * Checks if a file path is matched by the ignore rules defined in a specific ignore file.
 * @param {string} filePath - The path of the file to check.
 * @param {string} workspaceDirectory - The directory of the workspace.
 * @param {string} ignoreFileName - The name of the ignore file.
 * @returns {boolean} - True if the file path is matched by the ignore rules, false otherwise.
 */
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
