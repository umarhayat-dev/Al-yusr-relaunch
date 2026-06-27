#!/usr/bin/env bash
# Blocks any em dash or en dash in source files. Wired as a PostToolUse hook.
# Exit 2 tells Claude Code to stop and fix the offending lines.
python3 - <<'PY'
import sys, pathlib, re
bad = re.compile('[\u2014\u2013]')  # em dash and en dash
exts = {'.tsx','.ts','.jsx','.js','.html','.css','.md','.mdx','.json'}
hits = []
root = pathlib.Path('src')
roots = [root] if root.exists() else [pathlib.Path('.')]
for base in roots:
    for p in base.rglob('*'):
        if p.is_file() and p.suffix.lower() in exts and 'node_modules' not in p.parts:
            for i, line in enumerate(p.read_text(encoding='utf-8', errors='ignore').splitlines(), 1):
                if bad.search(line):
                    hits.append(f"{p}:{i}: {line.strip()}")
if hits:
    sys.stderr.write("Em or en dash found. Remove every one (use a comma, hyphen, or rewrite):\n")
    sys.stderr.write("\n".join(hits) + "\n")
    sys.exit(2)
PY
