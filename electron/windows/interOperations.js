const electron = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const BrowserWindow = electron.BrowserWindow;

let internOperation

export const createInternOperationWindow = () => {
    internOperation = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Out device from boot center',
        modal: true,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        // parent: mainWindow,
    })

    internOperation.loadURL(
        (isDev)
            ? "http://localhost:3000/internOperation"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
    internOperation.once('ready-to-show', ()=> {
        internOperation.show()
    })
}