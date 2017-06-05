var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: './dist/team608-win32-ia32',
  authors: 'JunyoungJung',
  outputDirectory: './dist/installer-win32-x64',
  exe: 'team608.exe',
  setupExe: 'team608-Setup.exe',
  setupIcon: './public/img/icons/Icon.ico'
});

resultPromise.then(function () {
    console.log("It worked!");
  }, function (e) {
  console.log('No dice: ' + e.message);
});