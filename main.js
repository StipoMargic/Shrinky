const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const { isMac, isDev } = require('./helpers/helpers.js');

process.env.NODE_ENV = 'dev';

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: 'Shrinky',
    width: 800,
    height: 600,
    resizable: isDev() ? true : false,
    icon: './app/assets/logo.png',
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile('./app/index.html');
}

app.on('ready', () => {
  createMainWindow();

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  mainWindow.on('ready', () => (mainWindow = null));
});

const menu = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        click: () => app.quit(),
      },
      { role: 'reload' },
    ],
  },
];
