![](https://github.com/idahogurl/vs-code-prettier-eslint/blob/master/icon.png?raw=true)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# [VS Code Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

A Visual Studio Code Extension to format JavaScript and TypeScript code using the [prettier-eslint](https://github.com/prettier/prettier-eslint) package.

**Please** [create an issue](https://github.com/idahogurl/vs-code-prettier-eslint/issues) before adding a rating. Keep in mind that I work full-time and I am the only contributor currently. I'd LOVE to have more contributors. See the **Contributing** section below.

## Prerequisites

This extension requires the following NPM packages to be installed either locally or globally:

- `prettier@^2.5.1`
- `eslint@^8.7.0`

- `@typescript-eslint/parser@^5.0.1` and `typescript@^4.4.4` **(Only for TypeScript projects)**
- `vue-eslint-parser@^8.0.0` **(Only for Vue projects)**

### Support for Earlier Versions
For Prettier 1.9 & ESLint 6.8 support use version 3.1

[DOWNLOAD](https://marketplace.visualstudio.com/_apis/public/gallery/publishers/rvest/vsextensions/vs-code-prettier-eslint/3.1.0/vspackage) | 
[README](https://github.com/idahogurl/vs-code-prettier-eslint/tree/3.x)

## Example Projects

These projects are setup to work with the VS Code Prettier ESLint extension. Use them to help troubleshoot or as a boilerplate for your project. If you don't see an example for your tech stack, create a PR of a working example.

- [JavaScript](https://github.com/idahogurl/vs-code-prettier-eslint/tree/master/examples/javascript)
- [JavaScript with Vue](https://github.com/idahogurl/vs-code-prettier-eslint/tree/master/examples/javascript-vue)
- [TypeScript](https://github.com/idahogurl/vs-code-prettier-eslint/tree/master/examples/typescript)
- [TypeScript with Vue](https://github.com/idahogurl/vs-code-prettier-eslint/tree/master/examples/typescript-vue)

## Troubleshooting
1. Check for an error by opening the `View` menu and click `Output`
2. Select `Prettier ESLint` from the dropdown to the right

<img width="500" alt="troubleshooting" src="https://user-images.githubusercontent.com/10620169/119163604-c9a5cd80-ba18-11eb-91af-fe4d2efe8567.png">

3. Open a JavaScript (`.js` or `.jsx`) or TypeScript (`.ts` or .`tsx`) file
4. Press `CTRL + SHIFT + P` (Windows/Linux) or `CMD + SHIFT + P` (macOS) to open the command palette
5. Start typing `Format Document With` and select `Prettier ESLint`
6. Click on `Output` to open the panel
7. If you see _Error: Cannot find module_, quit and restart Visual Studio Code
8. If restarting did not work:
   - If you saw _Error: Cannot find module '@typescript-eslint/parser'_, view the [TypeScript project](https://github.com/idahogurl/vs-code-prettier-eslint/tree/master/examples/typescript) for a working example.
   - Make sure you have the required packages installed locally (global installations don't work sometimes)

**Note**: Most issues are caused by using an unsupported ESLint version or an invalid ESLint configuration.

Running your files through the [Prettier ESLint CLI](https://github.com/prettier/prettier-eslint-cli) first is a good way to determine if it's the extension, the `prettier-eslint` package, or your configuration. 

You can run `eslint --print-config .eslintrc.js` to check your ESLint configuration. This prints out the configuration being used after it applies plugins & extended configurations.

**Note**: There are known performance issues with quad-core or slower processors. The slowness comes from ESLint CLI which the 'prettier-eslint' package because uses.

## Installation

**Notes**:

- The [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is not required.

- The [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is not required. However, it is needed to have lint errors show while editing your file.

### Install Dependencies

See [Prerequisites](#prerequisites) above.

### Install the Extension

1. Install the extension
2. Quit VS Code
3. Restart VS Code

### Set as Default Formatter

1. Open the file you want to format
2. Press `CTRL + SHIFT + P` (Windows/Linux) or `CMD + SHIFT + P` (macOS) to open the command palette
3. Start typing `Format Document With` and select it
4. Choose the bottom item `Configure Default Formatter`
5. Choose `Prettier ESLint`

### Run the Formatter

Once installed, open a JavaScript (`.js` or `.jsx`) or TypeScript (`.ts` or .`tsx`) file. Press `SHIFT + OPTION + F` (macOS) or `SHIFT + ALT + F` (Windows/Linux) to format a file.

You can enable the `Format on Save` setting to avoid entering the command all the time.

## Setup Format on Save

1. Set `Prettier Eslint` as the default formatter as detailed above
2. Open `User` or `Workspace` settings

- On Windows/Linux - `File > Preferences > Settings`
- On MacOS - `Code > Preferences > Settings`

3. Start typing `Format on` and select it
4. Check `Format on Save` (found mid-page in the right panel)
5. Ensure both `Format on Input` and `Format on Paste` are disabled. They are not supported functionality

Afterward, the file should format automatically once you save it

For the best performance, change `Auto Save` to `onFocusChanged`. This will have the editor save changes when you switch to another file or another program. The default setting makes the file save after you stop typing for an interval. This causes the formatter to run frequently thus taking more computer resources.

1. Open `User` or `Workspace` settings

- On Windows/Linux - `File > Preferences > Settings`
- On macOS - `Code > Preferences > Settings`

2. Start typing `Auto Save` and select `onFocusChanged`

## Configuration

The extension uses your ESLint and Prettier configuration files. These files are resolved starting from the location of the file being formatted, and searching up the file tree until a config file is (or isn't) found.

### ESLint Configuration File

(From https://eslint.org/docs/user-guide/configuring)

Use a JavaScript, JSON or YAML file to specify configuration information for an entire directory and all of its subdirectories. This can be in the form of an [`.eslintrc.*`](https://eslint.org/docs/user-guide/configuring#configuration-file-formats) file or an `eslintConfig` field in a [`package.json`](https://docs.npmjs.com/files/package.json) file.

### Prettier Configuration File

(From https://prettier.io/docs/en/configuration.html)

Prettier uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for configuration file support. This means you can configure prettier via (in order of precedence):

- A `"prettier"` key in your `package.json` file.
- A `.prettierrc` file, written in JSON or YAML, with optional extensions: `.json/.yaml/.yml` (without extension takes precedence).
- A `.prettierrc.js` or `prettier.config.js` file that exports an object.
- A `.prettierrc.toml` file, written in TOML (the `.toml` extension is _required_).

## Contributing

If you have suggestions for how this extension could be improved, or want to report a bug, open an issue! I'd love all and any contributions. If you are interested in contributing to the project, check out the [Contributing Guide](https://github.com/idahogurl/vs-code-prettier-eslint/blob/deploy/CONTRIBUTING.md).

## Current Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/idahogurl"><img src="https://secure.gravatar.com/avatar/787139c4c697cfc33cc422566a4ccf78?s=80&d=identicon?s=100" width="100px;" alt=""/><br /><sub><b>Rebecca Vest</b></sub></a><br /><a href="#question-idahogurl" title="Answering Questions">💬</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits?author=idahogurl" title="Code">💻</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits?author=idahogurl" title="Documentation">📖</a> <a href="#infra-idahogurl" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/issues?q=author%3Aidahogurl" title="Bug reports">🐛</a> <a href="#ideas-idahogurl" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/pulls?q=is%3Apr+reviewed-by%3Aidahogurl" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits?author=idahogurl" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/tbekaert"><img src="https://avatars.githubusercontent.com/u/11920484?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thomas Bekaert</b></sub></a><br /><a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits?author=tbekaert" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
