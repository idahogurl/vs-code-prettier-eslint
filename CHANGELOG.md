# v6.0.0 (Fri Dec 1 2023)

#### 🚀 Enhancement

- fix: use `worker_threads` via [`synckit`](https://github.com/un-ts/synckit) to support Prettier 3

#### ⚠️ Breaking Changes
- `prettier-eslint` is no longer bundled with the extension and must be installed by the user
- Prettier v3.0 is now required
- ESLint >= v8.52.0 is now required

# v5.1.0 (Fri Mar 10 2023)

:tada: This release contains work from a new contributor! :tada:

Thank you, Jeff ([@yefremov](https://github.com/yefremov)), for all your work!

#### 🚀 Enhancement

- feat: :sparkles: Add setting for "prettierLast" [#150](https://github.com/idahogurl/vs-code-prettier-eslint/pull/150) (rvest@equinoxmedia.com)

#### 🐛 Bug Fix

- chore(config): 🔧 Change 'auto' configuration file [#157](https://github.com/idahogurl/vs-code-prettier-eslint/pull/157) (rvest@equinoxmedia.com)
- fix: :bug: Fix workspace matching when formatted file is in a sub-directory [#102](https://github.com/idahogurl/vs-code-prettier-eslint/pull/102) (rvest@equinoxmedia.com)
- revert: :rewind: Revert esbuild "espree" replace [#99](https://github.com/idahogurl/vs-code-prettier-eslint/pull/99) (rvest@equinoxmedia.com)

#### ⚠️ Pushed to `master`

- Update 'auto' settings (rvest@equinoxmedia.com)
- ci(actions): Fix bad command (rvest@equinoxmedia.com)
- ci(actions): Fetch tags in release workflow (rvest@equinoxmedia.com)
- Add caching to Azure Pipeline (rvest@equinoxmedia.com)
- Fix syntax error (rvest@equinoxmedia.com)
- Update azure-pipelines.yml (rvest@equinoxmedia.com)
- Create test.yml (rvest@equinoxmedia.com)
- Delete .depfu.yml (rvest@equinoxmedia.com)
- Add Depfu config (rvest@equinoxmedia.com)
- Delete package-lock.json (rvest@equinoxmedia.com)
- Merge remote-tracking branch 'origin/deploy' (rvest@equinoxmedia.com)
- Merge branch 'master' of https://github.com/idahogurl/vs-code-prettier-eslint (rvest@equinoxmedia.com)
- chore: Use Node 12 on 3.x and 4.x branch (rvest@equinoxmedia.com)

#### :bricks: Continuous Integration

- ci(actions): :bricks: Replace semantic-release with intuit/auto [#152](https://github.com/idahogurl/vs-code-prettier-eslint/pull/152) (rvest@equinoxmedia.com)

#### 📝 Documentation

- Update README.md [#154](https://github.com/idahogurl/vs-code-prettier-eslint/pull/154) ([@yefremov](https://github.com/yefremov))
- chore: Update TypeScript Vue example [#149](https://github.com/idahogurl/vs-code-prettier-eslint/pull/149) (rvest@equinoxmedia.com)

#### 🧪 Tests

- ci(test): :construction_worker: Add testing to CI [#98](https://github.com/idahogurl/vs-code-prettier-eslint/pull/98) (rvest@equinoxmedia.com)

#### 🔩 Dependency Updates

- chore(deps): Bump http-cache-semantics from 4.1.0 to 4.1.1 [#143](https://github.com/idahogurl/vs-code-prettier-eslint/pull/143) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Update all development Yarn dependencies (2023-01-06) [#137](https://github.com/idahogurl/vs-code-prettier-eslint/pull/137) ([@depfu[bot]](https://github.com/depfu[bot]))
- chore(deps): Bump json5 from 1.0.1 to 1.0.2 [#136](https://github.com/idahogurl/vs-code-prettier-eslint/pull/136) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Update all development Yarn dependencies (2023-01-04) [#135](https://github.com/idahogurl/vs-code-prettier-eslint/pull/135) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2023-01-02) [#134](https://github.com/idahogurl/vs-code-prettier-eslint/pull/134) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-12-29) [#133](https://github.com/idahogurl/vs-code-prettier-eslint/pull/133) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-12-21) [#132](https://github.com/idahogurl/vs-code-prettier-eslint/pull/132) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-12-19) [#130](https://github.com/idahogurl/vs-code-prettier-eslint/pull/130) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update ignore: 5.2.1 → 5.2.4 (patch) [#131](https://github.com/idahogurl/vs-code-prettier-eslint/pull/131) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-12-17) [#129](https://github.com/idahogurl/vs-code-prettier-eslint/pull/129) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-12-16) [#128](https://github.com/idahogurl/vs-code-prettier-eslint/pull/128) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-12-12) [#125](https://github.com/idahogurl/vs-code-prettier-eslint/pull/125) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-12-09) [#124](https://github.com/idahogurl/vs-code-prettier-eslint/pull/124) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-12-08) [#123](https://github.com/idahogurl/vs-code-prettier-eslint/pull/123) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-12-06) [#122](https://github.com/idahogurl/vs-code-prettier-eslint/pull/122) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-12-02) [#120](https://github.com/idahogurl/vs-code-prettier-eslint/pull/120) ([@depfu[bot]](https://github.com/depfu[bot]))
- chore(deps): Bump qs from 6.10.1 to 6.11.0 [#121](https://github.com/idahogurl/vs-code-prettier-eslint/pull/121) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Update all development Yarn dependencies (2022-11-30) [#119](https://github.com/idahogurl/vs-code-prettier-eslint/pull/119) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update ignore: 5.2.0 → 5.2.1 (patch) [#117](https://github.com/idahogurl/vs-code-prettier-eslint/pull/117) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-11-28) [#116](https://github.com/idahogurl/vs-code-prettier-eslint/pull/116) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-11-25) [#115](https://github.com/idahogurl/vs-code-prettier-eslint/pull/115) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-11-17) [#114](https://github.com/idahogurl/vs-code-prettier-eslint/pull/114) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-11-12) [#112](https://github.com/idahogurl/vs-code-prettier-eslint/pull/112) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-11-08) [#111](https://github.com/idahogurl/vs-code-prettier-eslint/pull/111) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-11-06) [#110](https://github.com/idahogurl/vs-code-prettier-eslint/pull/110) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-11-05) [#109](https://github.com/idahogurl/vs-code-prettier-eslint/pull/109) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-10-26) [#108](https://github.com/idahogurl/vs-code-prettier-eslint/pull/108) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-10-20) [#105](https://github.com/idahogurl/vs-code-prettier-eslint/pull/105) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-10-16) [#104](https://github.com/idahogurl/vs-code-prettier-eslint/pull/104) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-10-12) [#103](https://github.com/idahogurl/vs-code-prettier-eslint/pull/103) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-10-09) [#101](https://github.com/idahogurl/vs-code-prettier-eslint/pull/101) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-10-08) [#100](https://github.com/idahogurl/vs-code-prettier-eslint/pull/100) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update expect: 29.0.3 → 29.1.2 (minor) [#96](https://github.com/idahogurl/vs-code-prettier-eslint/pull/96) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all-contributors-cli: 6.20.4 → 6.22.0 (minor) [#97](https://github.com/idahogurl/vs-code-prettier-eslint/pull/97) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update esbuild: 0.15.8 → 0.15.10 (minor) [#95](https://github.com/idahogurl/vs-code-prettier-eslint/pull/95) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update eslint: 8.23.1 → 8.24.0 (minor) [#94](https://github.com/idahogurl/vs-code-prettier-eslint/pull/94) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update vsce: 2.10.0 → 2.11.0 (minor) [#87](https://github.com/idahogurl/vs-code-prettier-eslint/pull/87) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update eslint: 8.22.0 → 8.23.1 (minor) [#86](https://github.com/idahogurl/vs-code-prettier-eslint/pull/86) ([@depfu[bot]](https://github.com/depfu[bot]))
- Upgrade expect: 28.1.3 → 29.0.3 (major) [#89](https://github.com/idahogurl/vs-code-prettier-eslint/pull/89) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update semantic-release: 19.0.3 → 19.0.5 (patch) [#90](https://github.com/idahogurl/vs-code-prettier-eslint/pull/90) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update esbuild: 0.15.5 → 0.15.8 (minor) [#85](https://github.com/idahogurl/vs-code-prettier-eslint/pull/85) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all-contributors-cli: 6.20.0 → 6.20.4 (patch) [#88](https://github.com/idahogurl/vs-code-prettier-eslint/pull/88) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-08-18) [#76](https://github.com/idahogurl/vs-code-prettier-eslint/pull/76) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-08-16) [#75](https://github.com/idahogurl/vs-code-prettier-eslint/pull/75) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-08-14) [#74](https://github.com/idahogurl/vs-code-prettier-eslint/pull/74) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-08-12) [#73](https://github.com/idahogurl/vs-code-prettier-eslint/pull/73) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-08-10) [#71](https://github.com/idahogurl/vs-code-prettier-eslint/pull/71) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-08-06) [#70](https://github.com/idahogurl/vs-code-prettier-eslint/pull/70) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-08-04) [#69](https://github.com/idahogurl/vs-code-prettier-eslint/pull/69) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-08-02) [#68](https://github.com/idahogurl/vs-code-prettier-eslint/pull/68) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update core-js: 3.24.0 → 3.24.1 (patch) [#65](https://github.com/idahogurl/vs-code-prettier-eslint/pull/65) ([@depfu[bot]](https://github.com/depfu[bot]))
- Upgrade prettier-eslint: 14.1.0 → 15.0.1 (major) [#62](https://github.com/idahogurl/vs-code-prettier-eslint/pull/62) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update espree: 9.3.2 → 9.3.3 (patch) [#67](https://github.com/idahogurl/vs-code-prettier-eslint/pull/67) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-08-01) [#66](https://github.com/idahogurl/vs-code-prettier-eslint/pull/66) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update all development Yarn dependencies (2022-07-30) [#64](https://github.com/idahogurl/vs-code-prettier-eslint/pull/64) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update prettier-eslint: 14.0.2 → 14.1.0 (minor) [#60](https://github.com/idahogurl/vs-code-prettier-eslint/pull/60) ([@depfu[bot]](https://github.com/depfu[bot]))
- chore(deps): bump minimist from 1.2.5 to 1.2.6 [#52](https://github.com/idahogurl/vs-code-prettier-eslint/pull/52) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- chore(deps): bump async from 3.2.1 to 3.2.4 [#53](https://github.com/idahogurl/vs-code-prettier-eslint/pull/53) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- chore(deps): bump node-fetch from 2.6.5 to 2.6.7 [#54](https://github.com/idahogurl/vs-code-prettier-eslint/pull/54) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- chore(deps): Update glob: 7.2.0 → 7.2.3 (patch) [#57](https://github.com/idahogurl/vs-code-prettier-eslint/pull/57) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update ignore: 5.1.8 → 5.2.0 (minor) [#59](https://github.com/idahogurl/vs-code-prettier-eslint/pull/59) ([@depfu[bot]](https://github.com/depfu[bot]))
- chore(deps): Update core-js: 3.18.3 → 3.24.0 (minor) [#58](https://github.com/idahogurl/vs-code-prettier-eslint/pull/58) ([@depfu[bot]](https://github.com/depfu[bot]))
- chore(deps): Update expect-mocha-snapshot: 2.1.4 → 2.1.5 (patch) [#56](https://github.com/idahogurl/vs-code-prettier-eslint/pull/56) ([@depfu[bot]](https://github.com/depfu[bot]))
- Update espree: 9.3.1 → 9.3.2 (patch) [#55](https://github.com/idahogurl/vs-code-prettier-eslint/pull/55) ([@depfu[bot]](https://github.com/depfu[bot]))

#### Authors: 4

- [@dependabot[bot]](https://github.com/dependabot[bot])
- [@depfu[bot]](https://github.com/depfu[bot])
- Jeff ([@yefremov](https://github.com/yefremov))
- Rebecca Vest ([@idahogurl](https://github.com/idahogurl))

---

## [5.0.4](https://github.com/idahogurl/vs-code-prettier-eslint/compare/v5.0.3...v5.0.4) (2022-07-25)

## [5.0.3](https://github.com/idahogurl/vs-code-prettier-eslint/compare/v5.0.2...v5.0.3) (2022-06-21)

## [5.0.2](https://github.com/idahogurl/vs-code-prettier-eslint/compare/v5.0.1...v5.0.2) (2022-06-21)

## [5.0.1](https://github.com/idahogurl/vs-code-prettier-eslint/compare/v5.0.0...v5.0.1) (2022-04-27)

### Hotfix
- Fix extension activation error

## [5.0.0](https://github.com/idahogurl/vs-code-prettier-eslint/compare/v4.1.0...v5.0.0) (2022-04-26)

### Added
- Upgraded to support ESLint 8

### Breaking Changes
- ESLint 8+ is now required

## [4.1.0](https://github.com/idahogurl/vs-code-prettier-eslint/compare/v3.0.3...v4.1.0) (2022-02-15)

### Added
- Upgraded to support Prettier 2 & ESLint 7
- Updated 'example' projects

## [3.1.0](https://github.com/idahogurl/vs-code-prettier-eslint/compare/v3.0.3...v3.1.0) (2021-05-21)
### Added
- Add MDX support

## 3.0.4 (2021-05-21)
- Moved repository from GitLab to GitHub

## 3.0.3 (2021-05-15)
### Added
- Improved setup instructions in README

## 3.0.2 (2021-04-13)

### Hotfix
- Revert prettier-eslint version to 10.1.0

## 3.0.1 (2021-04-13)

### Added
- Updated README

## 3.0.0 (2021-04-13)

### Hotfix
- Undo breaking changes introduced by upgrading Prettier and ESLint
- Undo applying `.eslintignore` & `.prettierignore` files

### Breaking Changes
- Prettier v2.0 is not supported
- ESLint v7.0 is not supported

## 2.1.0 (2021-03-26)

### Added
- Abide by `.eslintignore` & `.prettierignore` files
- Fix `module missing utils` error

## 0.2.4 (2020-03-04)
### Added
- Support JavaScript Eslint config files
### Removed
- Need for settings 

## 2.0.0 (2021-03-24)
### Added
- Upgrade to ESLint 7.x

### Breaking Changes
- ESLint 7+ is now required

## 1.0.0 (2021-03-15)
### Added
- Upgrade to Prettier v2.0

### Breaking Changes
- Prettier v2.0 is now required

## 0.4.1 - (2020-12-17)
### Added
- Support Svelte

## 0.4.0 - (2020-11-25)
### Added
- Support CSS, GraphQL, HTML, JSON, LESS, Markdown, SCSS, Vue & YAML

## 0.3.2 (2020-06-23)
### Hotfix
- Undo breaking build changes

## 0.3.0 (2020-06-22)
### Added
- Support Typescript and Typescript React
- Support latest ESLint

## 0.1.3 (2020-03-02)
### Added
- Multi-root workspace support

## Unreleased

- Initial release
