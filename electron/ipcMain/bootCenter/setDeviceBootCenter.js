const {ipcMain} = require('electron')
const {channels} = require("../../channels/bootCenter");
const {testDevices} = require("../../common/testDevices")
let i = 15

ipcMain.handle(channels.SET_DEVICE, (event, arg) => {
    testDevices.unshift({
        builder: "fabricante"+i,
        device: "Equipo"+i,
        model: "Modelo",
        operation: "It Delivery",
        serial: "Serial"+i,
        entryDate: "11/1/2022",
        pxeDate: "",
        operationAssigned: "Sin Imagen",
        scotia: "GSG",
    })
    console.log(arg)
    i = i+1;
    return testDevices
})