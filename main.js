const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow,
  loadingScreen,
  windowParams = {
    width: 900,
    height: 600,
    show: false
  };

function onClosed() {
  mainWindow = null;
}

function createLoadingScreen() {
  loadingScreen = new BrowserWindow(Object.assign(windowParams, {parent: mainWindow}));

  loadingScreen.loadURL(`file://${__dirname}/loading.html`);

  loadingScreen.on('closed', () => loadingScreen = null);

  loadingScreen.webContents.on('did-finish-load', () => {
    loadingScreen.show();
  });
}

function createWindow() {
  mainWindow = new BrowserWindow(windowParams);

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();

  if (loadingScreen) {
    var loadingScreenBounds = loadingScreen.getBounds();
    mainWindow.setBounds(loadingScreenBounds);
    loadingScreen.close();
  }
});

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createLoadingScreen();

setTimeout(function(){
  createWindow();
}, 2000);
});

app.on('activate', () => {
  if(!mainWindow) {
  createWindow();
}
});

app.on('window-all-closed', () => {
  if(process.platform != 'darwin') {
    app.quit();
  }
});
