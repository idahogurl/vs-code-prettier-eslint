// see https://github.com/microsoft/vscode-test/issues/37#issuecomment-700167820
const path = require('path');

module.exports = {
  moduleFileExtensions: ['js'],
  testMatch: ['<rootDir>/test/suite/**.test.js'],
  testEnvironment: './test/vscode-environment.js',
  verbose: true,
  moduleNameMapper: {
    vscode: path.join(__dirname, 'test', 'vscode.js'),
  },
};
