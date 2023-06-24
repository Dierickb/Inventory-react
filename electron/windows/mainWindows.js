const electron = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const {app} = require("electron");
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

const createWindow = async () => {
    mainWindow = new BrowserWindow({
        width: 1500,
        height: 1000,
        title: "Assets",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            sandbox: false,
        },
        // titleBarStyle: "hiddenInset",
        // resizable: false,
    });
    mainWindow.loadURL(
        (isDev)
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );

    if (isDev) mainWindow.webContents.openDevTools();

    mainWindow.on("closed",
        () => (mainWindow = null)
    );
}

app.on("ready",  async () => {
    createWindow();

    if (isDev) {
        //await installExtensions();
        mainWindow.webContents.on("did-frame-finish-load", () => {
            mainWindow.webContents.once("devtools-opened", () => {
                mainWindow.focus();
            });
            mainWindow.webContents.openDevTools({
                mode: 'undocked'
            });
        });
    }}
)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});