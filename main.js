// Retrieve information about screen size, displays, cursor position, etc.
//
// For more info, see:
// https://electronjs.org/docs/api/screen

const { app, BrowserWindow, Tray
} = require('electron')

let mainWindow = null

app.whenReady().then(() => {
  // We cannot require the screen module until the app is ready.
  const { screen } = require('electron')

  // Create a window that fills the screen's available work area.
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize
//const win = new BrowserWindow({ icon: '/Users/somebody/images/window.png' })
//console.log(appIcon, win)

  mainWindow = new BrowserWindow({ autoHideMenuBar: true, width, height })
  mainWindow.loadURL('https://discord.com/app')



})

