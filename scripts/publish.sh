yarn version --new-version "$1" --no-git-tag-version
yarn package
yarn vsce publish -p "$VSCE_PAT"
yarn ovsx publish -p "$OVSX_PAT"