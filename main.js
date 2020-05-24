const { app, BrowserWindow } = require('electron');

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: 'ImageShrink',
    width: 800,
    height: 600,
    resizable: true,
    icon: './app/assets/logo.png',
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile('./app/index.html');
}

app.on('ready', () => {
  createMainWindow();

  mainWindow.on('ready', () => (mainWindow = null));
});
