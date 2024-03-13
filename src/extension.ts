// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { workspace, Uri, window } from 'vscode';
import * as path from "path";
import * as fs from "fs";
import * as os from "os";
import { createFileOnLocal } from './common';

const outputChannel = window.createOutputChannel("VSCode Remote Sync");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {


	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-remote-file-sync" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-remote-file-sync.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const codeSpaceBashHistoryPath = Uri.file(os.homedir());
		const localBashHistoryPath = path.join("C:/", "vscode_remote_sync_dir", ".bash_history");
		// const codeSpaceBashHistoryFilePath = Uri.joinPath(codeSpaceBashHistoryPath, ".bash_history");
		// const localBashHistoryPathFilePath = Uri.joinPath(localBashHistoryPath, ".bash_history");

		await createFileOnLocal(localBashHistoryPath);
		/*
		try {
			workspace.fs.delete(Uri.file(localBashHistoryPath).with({ scheme: "vscode-local" }), {recursive: false});
			await workspace.fs.copy(
				Uri.file(codeSpaceBashHistoryPath),
				Uri.file(localBashHistoryPath).with({ scheme: "vscode-local" }),
			);
			outputChannel.appendLine("Successfully able to copy it");
		} catch (error) {
			outputChannel.appendLine("Not able to copy it");
			outputChannel.appendLine(JSON.stringify(error));
		} */
/*		
		try {
			const wsedit = new vscode.WorkspaceEdit();
			wsedit.createFile(Uri.file(localBashHistoryPath).with({ scheme: "vscode-local" }), {ignoreIfExists: true});
			// await workspace.fs.copy(
			// 	Uri.file(codeSpaceBashHistoryPath),
			// 	Uri.file(localBashHistoryPath).with({ scheme: "vscode-local" }),
			// );
		} catch (error) {
			outputChannel.appendLine("Not able to copy it");
			outputChannel.appendLine(JSON.stringify(error));
		}


*/
		// await workspace.fs.copy(
		// 	Uri.file("C:/.vscode_remote_sync_dir/.bash_history").with({ scheme: "vscode-local" }),
		// 	Uri.file("~/.bash_history"),
		// );

		vscode.window.showInformationMessage('Hello World from vscode-remote-file-sync!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
