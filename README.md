![](https://github.com/idahogurl/vs-code-prettier-eslint/blob/deploy/icon.png?raw=true)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# [VS Code Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

A Visual Studio Code Extension to format JavaScript and TypeScript code using the [prettier-eslint](https://github.com/prettier/prettier-eslint) package.

**Please** [create an issue](https://github.com/idahogurl/vs-code-prettier-eslint/issues) before adding a rating. Keep in mind that I work full-time and I am the only contributor currently. I'd LOVE to have more contributors. See the **Contributing** section below.

## Prerequisites

This extension requires the following packages to be installed either locally or globally:

- `prettier@1.9.1`
- `eslint@6.8.0`
- `prettier-eslint@10.1.0`

- `@typescript-eslint/parser@^3.0.0` and `typescript@^3.9.3` **(Only for TypeScript projects)**
- `vue-eslint-parser@~7.1.0` **(Only for Vue projects)**

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
   - Make sure you have the required packages installed locally (global installations don't work sometimes)
   - Repeat Step 8

## Installation

**Notes**:

- The [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is not required.

- The [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is not required. However, it is needed to have lint errors show while editing your file.

### Install Dependencies

1. In your project, install `eslint@6.8.0`, `prettier@1.9.1`, & `prettier-eslint:^10.1.0` as `devDependencies`
2. Additionally install:
   - `@typescript-eslint/parser@^3.0.0` for TypeScript projects (`.ts` & `.tsx` files)
   - `vue-eslint-parser@~7.1.0` for Vue projects (`.vue` files)

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
    <td align="center"><a href="https://github.com/idahogurl"><img src="https://secure.gravatar.com/avatar/787139c4c697cfc33cc422566a4ccf78?s=80&d=identicon" width="100px;" alt=""/><br /><sub><b>Rebecca Vest</b></sub></a><br /><a href="#question-idahogurl" title="Answering Questions">💬</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits/master" title="Code">💻</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits/master" title="Documentation">📖</a> <a href="#infra-idahogurl" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/issues/idahogurl" title="Bug reports">🐛</a> <a href="#ideas-idahogurl" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/pulls/idahogurl" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits/master" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
