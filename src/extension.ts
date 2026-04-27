import path from "node:path";

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand("pathlet.opened", async () => {
			vscode.commands.executeCommand("workbench.action.quickOpen", "edt ");
		}),

		vscode.commands.registerCommand("pathlet.pwd", async () => {
			const editor = vscode.window.activeTextEditor;

			let p = "";
			if (editor) {
				const filePath = vscode.workspace.asRelativePath(editor.document.uri, false);
				p = path.dirname(filePath);
			}

			vscode.commands.executeCommand("workbench.action.quickOpen", p === "." ? "" : p);
		})
	);
}
