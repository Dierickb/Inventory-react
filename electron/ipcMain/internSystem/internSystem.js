const {ipcMain} = require("electron")

ipcMain.handle("leftBar-internOperation", async (event, someArgument) => {
    return `Message ${someArgument.message} recived`
})