import * as vscode from "vscode";
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("edt.edt", async () => {
      vscode.commands.executeCommand("workbench.action.quickOpen", "edt ");
    }),
    vscode.commands.registerCommand("edt.path", async () => {
      const editor = vscode.window.activeTextEditor;

      let p;      
      if (editor) {
        const filePath = vscode.workspace.asRelativePath(editor.document.uri, false);
        p = path.dirname(filePath);
      } else {
        p = '';
      }
      
      vscode.commands.executeCommand("workbench.action.quickOpen", p);
    }),
  );
}