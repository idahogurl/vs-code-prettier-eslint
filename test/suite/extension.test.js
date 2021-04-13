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

const basePath = path.join(__dirname, '..', 'fixtures');
const sourceFile = path.join(__dirname, '..', 'fixtures', 'test.js');

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  suiteSetup(async () => {
    await helper.changeConfig('[javascript]', {
      'editor.defaultFormatter': 'rvest.vs-code-prettier-eslint',
    });
  });
  // To get the snapshot functionality to work, function cannot be a callback
  // eslint-disable-next-line func-names, prefer-arrow-callback
  test('Formats document using .eslintrc', async function () {
    const sourceDocument = await helper.openFile(sourceFile);
    const content = sourceDocument.getText().replace('/* eslint-disable */\n', '');
    const filePath = `${basePath}/temp.js`;

    fs.writeFileSync(filePath, content, { overwrite: true });
    const document = await helper.openFile(filePath);
    await vscode.commands.executeCommand('editor.action.formatDocument');
    const formatted = document.getText();

    expect(formatted).toMatchSnapshot(this);
  });

  // eslint-disable-next-line func-names, prefer-arrow-callback
  test('Format document using .prettierrc', async function () {
    // await helper.changeConfig('vs-code-prettier-eslint', {
    //   prettierLast: true,
    // });

    const sourceDocument = await helper.openFile(sourceFile);
    const content = sourceDocument.getText().replace('// prettier-ignore\n', '');
    const filePath = `${basePath}/temp2.js`;
    fs.writeFileSync(filePath, content, { overwrite: true });
    const document = await helper.openFile(filePath);
    await vscode.commands.executeCommand('editor.action.formatDocument');
    const formatted = document.getText();

    expect(formatted).toMatchSnapshot(this);
  });
  suiteTeardown(() => {
    helper.clearConfig('[javascript]');
  });
});
