const {ipcMain} = require('electron')
const {channels} = require("../../channels/bootCenter");
const {testDevices} = require("../../common/testDevices")

ipcMain.handle(channels.GET_DEVICES, (event, arg) => {
    return testDevices
})