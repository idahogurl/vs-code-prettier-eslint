yarn version --new-version "$1" --no-git-tag-version
yarn package
yarn vsce publish --pre-release -p "$VSCE_PAT"
yarn ovsx publish --pre-release -p "$OVSX_PAT"