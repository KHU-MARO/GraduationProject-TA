const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller;
const path = require('path');

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error);
    process.exit(1);
  });

function getInstallerConfig () {
  console.log('creating windows installer');
  const rootPath = path.join('./');
  const outPath = path.join(rootPath, 'dist');

  return Promise.resolve({
    appDirectory: path.join(outPath, 'team608-win32-x64'),
    authors: 'Junyoung Jung(sauber92)',
    noMsi: true,
    outputDirectory: path.join(outPath, 'installer-win32-x64'),
    exe: 'team608.exe',
    setupExe: 'team608Setup.exe',
    setupIcon: path.join(rootPath, 'public', 'img', 'icons', 'Icon.ico')
  })
}