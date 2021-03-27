const expect = require('expect');
const toMatchSnapshot = require('expect-mocha-snapshot');

expect.extend({ toMatchSnapshot });

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// eslint-disable-next-line import/no-unresolved
const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
const helper = require('./helper');

require('../../dist/extension');

const sourceFileJs = path.join(__dirname, '..', 'fixtures', 'test.js');
const sourceFileTs = path.join(__dirname, '..', 'fixtures', 'test.ts');

const sourceFileEslintIgnore = path.join(__dirname, '..', 'fixtures', '.test-eslintignore');
const sourceFilePrettierIgnore = path.join(__dirname, '..', 'fixtures', '.test-prettierignore');

function removeEslintDisable(fileContent) {
  return fileContent.replace('/* eslint-disable */\n', '');
}

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  suiteSetup(async () => {
    await helper.changeConfig('[javascript]', {
      'editor.defaultFormatter': 'rvest.vs-code-prettier-eslint',
    });
    await helper.changeConfig('[typescript]', {
      'editor.defaultFormatter': 'rvest.vs-code-prettier-eslint',
    });
  });

  // To get the snapshot functionality to work, function cannot be an arrow function
  test('Ignores document using .eslintrcignore', async function () {
    const sourceDocument = await helper.openFile(sourceFileJs);
    const content = removeEslintDisable(sourceDocument.getText());
    const filePath = helper.writeFile('temp.ts', content);

    const ignoreContents = fs.readFileSync(sourceFileEslintIgnore);
    const ignoreFilePath = helper.writeFile('.eslintignore', ignoreContents);

    const document = await helper.openFile(filePath);
    await vscode.commands.executeCommand('editor.action.formatDocument');
    const formatted = document.getText();
    await helper.closeFile();

    fs.unlinkSync(filePath);
    fs.unlinkSync(ignoreFilePath);

    expect(formatted).toMatchSnapshot(this);
  });

  test('Ignores document using .prettierignore', async function () {
    const sourceDocument = await helper.openFile(sourceFileTs);
    const content = removeEslintDisable(sourceDocument.getText());
    const filePath = helper.writeFile('temp.js', content);

    const ignoreContents = fs.readFileSync(sourceFilePrettierIgnore);
    const ignoreFilePath = helper.writeFile('.prettierignore', ignoreContents);

    const document = await helper.openFile(filePath);
    await vscode.commands.executeCommand('editor.action.formatDocument');
    const formatted = document.getText();
    await helper.closeFile();

    fs.unlinkSync(filePath);
    fs.unlinkSync(ignoreFilePath);

    expect(formatted).toMatchSnapshot(this);
  });

  test('Formats document using .eslintrc', async function () {
    const sourceDocument = await helper.openFile(sourceFileTs);
    const content = removeEslintDisable(sourceDocument.getText());
    const filePath = helper.writeFile('temp2.ts', content);

    const document = await helper.openFile(filePath);
    await vscode.commands.executeCommand('editor.action.formatDocument');
    const formatted = document.getText();
    await helper.closeFile();

    fs.unlinkSync(filePath);

    expect(formatted).toMatchSnapshot(this);
  });

  // eslint-disable-next-line func-names, prefer-arrow-callback
  test('Format document using .prettierrc', async function () {
    const sourceDocument = await helper.openFile(sourceFileJs);
    const content = sourceDocument.getText();
    const filePath = helper.writeFile('temp2.js', content);

    const document = await helper.openFile(filePath);
    await vscode.commands.executeCommand('editor.action.formatDocument');
    const formatted = document.getText();
    await helper.closeFile();

    fs.unlinkSync(filePath);

    expect(formatted).toMatchSnapshot(this);
  });

  suiteTeardown(async () => {
    await helper.clearConfig('[javascript]');
    await helper.clearConfig('[typescript]');
  });
});
