const electron = require('electron')
const { app, BrowserWindow, ipcMain } = electron
const path = require('path')
const isDev = require('electron-is-dev')
let mainWindow

//this below auto-reloads electron app on every change - dev part to be removed
try {
	require('electron-reloader')(module)
} catch (_) {}

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 900,
		height: 680,
		frame: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	})
	mainWindow.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`
	)
	mainWindow.maximize()
	mainWindow.on('closed', () => (mainWindow = null))
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})
app.on('activate', () => {
	if (mainWindow === null) {
		createWindow()
	}
})
ipcMain.on('key-clicked', function (_, item) {
	if (item === 84) {
		mainWindow.webContents.openDevTools()
	}
})
ipcMain.on('key-quit', function () {
	app.quit()
})
