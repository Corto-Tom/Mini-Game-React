
import { app, BrowserWindow } from 'electron'

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1258,
    height: 900,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  
  mainWindow.loadURL('http://localhost:5173/');
  mainWindow.on('closed', () => (mainWindow = null));
  
}
// mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
//   callback({
//     responseHeaders: {
//       ...details.responseHeaders,
//       'Content-Security-Policy': ['default-src \'self\''],
//     },
//   });
// });
app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();

  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});