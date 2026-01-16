bun run package
bun run vsce publish -p "$VSCE_PAT"
bun run ovsx publish -p "$OPEN_VSX_PAT"
