<img src="https://github.com/idahogurl/vs-code-prettier-eslint/blob/master/icon.png?raw=true" width="150">

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# [VS Code Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

- [Prerequisites](https://github.com/idahogurl/vs-code-prettier-eslint#prerequisites)
- [Installation](https://github.com/idahogurl/vs-code-prettier-eslint#installation)
- [Configuration](https://github.com/idahogurl/vs-code-prettier-eslint#configuration)
- [Example Projects](https://github.com/idahogurl/vs-code-prettier-eslint#example-projects)
- [Troubleshooting](https://github.com/idahogurl/vs-code-prettier-eslint#troubleshooting)

A Visual Studio Code Extension to format JavaScript and TypeScript code using the [prettier-eslint](https://github.com/prettier/prettier-eslint) package.

**Please** [create an issue](https://github.com/idahogurl/vs-code-prettier-eslint/issues) before adding a rating. Keep in mind that I work full-time. I'd LOVE to have more contributors. See the **Contributing** section below.

## Prerequisites

This extension requires the following NPM packages to be installed either locally or globally:

- `prettier@^3.1.0`
- `eslint@^8.52.0`
- `prettier-eslint@^16.1.2`
- `@typescript-eslint/parser@^5.0.1` and `typescript@^4.4.4` **(Only for TypeScript projects)**
- `vue-eslint-parser@^8.0.0` **(Only for Vue projects)**

**Note**: For earlier versions of Prettier and/or ESLint, see [Support for Earlier Versions](https://github.com/idahogurl/vs-code-prettier-eslint#support-for-earlier-versions) section

## Installation

[Download the extension](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) if you haven't already.

**Notes**:

- The [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is **not** required.

- The [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is **not** required. However, it is needed to have lint errors show while editing your file.

### Install Dependencies

First we need to install `prettier`, `eslint`, and `prettier-eslint` as dev dependencies in your project. Run one of the following commands based on your project requirements. The commands listed below use `yarn` but you can also use `npm`. Just replace `yarn add` with `npm i`

#### Minimum Requirements

```bash
yarn add -D prettier@^3.1.0 eslint@^8.52.0 prettier-eslint@^16.1.2
```

#### TypeScript Projects

```bash
yarn add -D prettier@^3.1.0 eslint@^8.52.0 prettier-eslint@^16.1.2 @typescript-eslint/parser@^5.0.1 typescript@^4.4.4
```

#### Vue Projects

```bash
yarn add -D prettier@^3.1.0 eslint@^8.52.0 prettier-eslint@^16.1.2 vue-eslint-parser@^8.0.0
```

### Project Settings

Next we need to configure your project to use the extension. To do that, we're going to open or create a `settings.json` file at the root of your project. If you already have a `.vscode/settings.json` file in your project, you can skip the first two steps below and jump straight to step 3.

1. Open the command palette in VS Code by typing:

   - `CMD + SHIFT + P` (Mac OS)
   - `CTRL + SHIFT + P` (Windows)

2. In the command palette type `Preferences: Open Workspace Settings (JSON)`.

3. In the `.vscode/settings.json` file we just opened, copy and paste the following settings

   ```jsonc
   {
     "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
     "editor.formatOnType": false, // required
     "editor.formatOnPaste": true, // optional
     "editor.formatOnSave": true, // optional
     "editor.formatOnSaveMode": "file", // required to format on save
     "files.autoSave": "onFocusChange", // optional but recommended
     "vs-code-prettier-eslint.prettierLast": false // set as "true" to run 'prettier' last not first
   }
   ```

4. **Restart VS Code**

With settings listed above, your project should now be setup to automatically format your code when you save. If you run into any problems, check the [troubleshooting](https://github.com/idahogurl/vs-code-prettier-eslint/#troubleshooting) guide below.

## Configuration

The extension uses your ESLint and Prettier configuration files. These files are resolved starting from the location of the file being formatted, and searching up the file tree until a config file is (or isn't) found.

### ESLint Configuration File

(From https://eslint.org/docs/user-guide/configuring)

> Use a JavaScript, JSON or YAML file to specify configuration information for an entire directory and all of its subdirectories. This can be in the form of an [`.eslintrc.*`](https://eslint.org/docs/user-guide/configuring#configuration-file-formats) file or an `eslintConfig` field in a [`package.json`](https://docs.npmjs.com/files/package.json) file, both of which ESLint will look for and read automatically.

### Prettier Configuration File

(From https://prettier.io/docs/en/configuration.html)

> Prettier uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for configuration file support. This means you can configure prettier via (in order of precedence):
>
> - A `"prettier"` key in your `package.json` file.
> - A `.prettierrc` file, written in JSON or YAML, with optional extensions: `.json/.yaml/.yml` (without extension takes precedence).
> - A `.prettierrc.js` or `prettier.config.js` file that exports an object.
> - A `.prettierrc.toml` file, written in TOML (the `.toml` extension is _required_).

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

**Notes**:

- Most issues are caused by using an unsupported ESLint version or an invalid ESLint configuration.
  You can run `npx eslint --print-config .eslintrc.js` to check your ESLint configuration. This prints out the configuration being used after it applies plugins & extended configurations.
- Running your files through the [Prettier ESLint CLI](https://github.com/prettier/prettier-eslint-cli) first is a good way to determine if it's the extension, the `prettier-eslint` package, or your configuration.

- There are known performance issues with quad-core or slower processors. The slowness comes from the `prettier-eslint` package the extension uses.

## Support for Earlier Versions

- Prettier 1.9 & ESLint 6.8 - Version 3.10.0 ([DOWNLOAD](https://marketplace.visualstudio.com/_apis/public/gallery/publishers/rvest/vsextensions/vs-code-prettier-eslint/3.1.0/vspackage) | [README](https://github.com/idahogurl/vs-code-prettier-eslint/tree/3.x))
- Prettier 2.0 & ESLint 7.0 - Version 4.10.0 ([DOWNLOAD](https://marketplace.visualstudio.com/_apis/public/gallery/publishers/rvest/vsextensions/vs-code-prettier-eslint/4.1.0/vspackage) |
  [README](https://github.com/idahogurl/vs-code-prettier-eslint/tree/4.x))
- Prettier 2.0 & ESLint 8.0 - Version 5.1.0 ([DOWNLOAD](https://marketplace.visualstudio.com/_apis/public/gallery/publishers/rvest/vsextensions/vs-code-prettier-eslint/5.1.0/vspackage) | [README](https://github.com/idahogurl/vs-code-prettier-eslint/blob/5.x/README.md))

## Contributing

If you have suggestions for how this extension could be improved, or want to report a bug, open an issue! I'd love all and any contributions. If you are interested in contributing to the project, check out the [Contributing Guide](https://github.com/idahogurl/vs-code-prettier-eslint/blob/deploy/CONTRIBUTING.md).

## Current Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/idahogurl"><img src="https://secure.gravatar.com/avatar/787139c4c697cfc33cc422566a4ccf78?s=80&d=identicon?s=100" width="100px;" alt="Rebecca Vest"/><br /><sub><b>Rebecca Vest</b></sub></a><br /><a href="#question-idahogurl" title="Answering Questions">💬</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits?author=idahogurl" title="Code">💻</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits?author=idahogurl" title="Documentation">📖</a> <a href="#infra-idahogurl" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/issues?q=author%3Aidahogurl" title="Bug reports">🐛</a> <a href="#ideas-idahogurl" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/pulls?q=is%3Apr+reviewed-by%3Aidahogurl" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits?author=idahogurl" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tbekaert"><img src="https://avatars.githubusercontent.com/u/11920484?v=4?s=100" width="100px;" alt="Thomas Bekaert"/><br /><sub><b>Thomas Bekaert</b></sub></a><br /><a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits?author=tbekaert" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://mattbrannon.dev/"><img src="https://avatars.githubusercontent.com/u/36570183?v=4?s=100" width="100px;" alt="Matt Brannon"/><br /><sub><b>Matt Brannon</b></sub></a><br /><a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits?author=mattbrannon" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.1stg.me/"><img src="https://avatars.githubusercontent.com/u/8336744?v=4?s=100" width="100px;" alt="JounQin"/><br /><sub><b>JounQin</b></sub></a><br /><a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits?author=JounQin" title="Code">💻</a> <a href="https://github.com/idahogurl/vs-code-prettier-eslint/pulls?q=is%3Apr+reviewed-by%3AJounQin" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://netux.site/"><img src="https://avatars.githubusercontent.com/u/6181929?v=4?s=100" width="100px;" alt="Martín Rodríguez"/><br /><sub><b>Martín Rodríguez</b></sub></a><br /><a href="https://github.com/idahogurl/vs-code-prettier-eslint/commits?author=netux" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
