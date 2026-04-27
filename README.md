# Pathlet

Ditch tabs and use Quick Open to navigate between open editors and the file system.

Pathlet adds two keyboard shortcuts that improve VS Code's Quick Open (`cmd+p` / `ctrl+p`):

## Commands

### Show opened editors — `alt+cmd+p` / `alt+ctrl+p`

Opens Quick Open pre-filtered to your currently open editors (equivalent to typing `edt ` manually). Replaces the need for an editor tab bar entirely.

### Open Quick Open at current file's directory — `ctrl+cmd+p` / `ctrl+ctrl+p`

Opens Quick Open pre-filled with the directory of the file you're editing, so you can navigate to sibling files without typing the path.

## Why

I don't like tabs.


## Installation

Search for **Pathlet** in the VS Code extension marketplace, or install via the CLI:

```
code --install-extension talovsky.pathlet
```

## Keybindings

| Command | Mac | Windows / Linux |
|---|---|---|
| Show opened editors | `alt+cmd+p` | `alt+ctrl+p` |
| Quick Open at current directory | `ctrl+cmd+p` | `ctrl+ctrl+p` |

You can rebind either command in **Preferences: Open Keyboard Shortcuts** by searching for `pathlet`.