![](https://gitlab.com/idahogurl/vs-code-prettier-eslint/-/raw/5b0d100df2eef87a3cb8ec7d8e125f6c5e5e6a9b/icon.png)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# [VS Code Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

A Visual Studio Code Extension to format JavaScript and TypeScript code using the [prettier-eslint](https://github.com/prettier/prettier-eslint) package.

## Prerequisites

This extension requires `prettier:^1.9.1`, `eslint:^6.8.0`, `prettier-eslint:^10.1.0` packages to be installed either locally or globally.

## Troubleshooting

### Obtain the Error
<img src="/uploads/25aa85517789ac4cc2701c103d652692/troubleshooting.png" width="500">
1. Open the `View` menu and click `Output`
2. Select `Prettier ESLint`
3. Open a JavaScript file. Press `CTRL + SHIFT + P` (Windows/Linux) or `CMD + SHIFT + P` (macOS) to open the command palette
4. Start typing `Format Document With` and select `Prettier ESLint`
5. View the `Output` panel to check for an error.

_Error: Cannot find module 'prettier'_ OR _Error: Cannot find module 'eslint'_
1. Quit Visual Studio Code
2. Open terminal and run `rm -rf node_modules` to erase your local `node_modules`
3. Run `npm install` or `yarn install` to reinstall your `node_modules`
3. Install Prettier and ESLint locally

**Please create an issue before adding a rating.** I am the only contributor currently. https://gitlab.com/idahogurl/vs-code-prettier-eslint/issues
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

## Running Formatter

Once installed, open a JavaScript file. Press `CTRL + CMD + P` (macOS) or `CTRL + Shift + P` (Windows/Linux) to format a file.

You can enable the `Format on Save` setting to avoid entering the command all the time.

## Default Formatter
- Open the file you want to format
- Press `CTRL + SHIFT + P` (Windows/Linux) or `CMD + SHIFT + P` (macOS) to open the command palette
- Start typing `Format Document With` and select it
- Choose the bottom item `Configure Default Formatter`
- Choose `Prettier ESLint`

## Setup Format on Save
- Set `Prettier Eslint` as the default formatter as detailed above
- Open User or Workspace settings
  - On Windows/Linux - File > Preferences > Settings
  - On macOS - Code > Preferences > Settings
- Start typing `Format on` and select it
- Check `Format on Save` (found mid-page in the right panel)
- Ensure both `Format on Input` and `Format on Paste` are disabled. They are not supported functionality
- Afterward, the file should format automatically once you save it

## Contributing

If you have suggestions for how this extension could be improved, or want to report a bug, open an issue! I'd love all and any contributions. If you are interested in contributing to the project, check out the [Contributing Guide](https://gitlab.com/idahogurl/vs-code-prettier-eslint/-/blob/master/CONTRIBUTING.md).


## Current Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://gitlab.com/idahogurl"><img src="https://secure.gravatar.com/avatar/787139c4c697cfc33cc422566a4ccf78?s=80&d=identicon" width="100px;" alt=""/><br /><sub><b>Rebecca Vest</b></sub></a><br /><a href="#question-idahogurl" title="Answering Questions">💬</a> <a href="https://gitlab.com/idahogurl/vs-code-prettier-eslint/commits/master" title="Code">💻</a> <a href="https://gitlab.com/idahogurl/vs-code-prettier-eslint/commits/master" title="Documentation">📖</a> <a href="#infra-idahogurl" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://gitlab.com/idahogurl/vs-code-prettier-eslint/issues?author_username=idahogurl" title="Bug reports">🐛</a> <a href="#ideas-idahogurl" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://gitlab.com/idahogurl/vs-code-prettier-eslint/merge_requests?scope=all&state=all&approver_usernames[]=idahogurl" title="Reviewed Pull Requests">👀</a> <a href="https://gitlab.com/idahogurl/vs-code-prettier-eslint/commits/master" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
