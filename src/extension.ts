import * as vscode from "vscode"

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("ahoy.helloWorld", () => {
    void vscode.window.showInformationMessage("Hello World!")
  })

  context.subscriptions.push(disposable)
}

export function deactivate() {}