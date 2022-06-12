/* eslint-disable no-template-curly-in-string */
module.exports = {
  branches: ['deploy', '+([0-9])?(.{+([0-9]),x}).x'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/exec',
      {
        publishCmd:
          process.env.BRANCH === 'deploy'
            ? './publish.sh ${nextRelease.version}'
            : './prerelease-publish.sh ${nextRelease.version}',
      },
    ],
    '@semantic-release/git',
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: '*.vsix',
            label: 'Extension File',
          },
        ],
      },
    ],
  ],
};
