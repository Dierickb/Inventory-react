const {ipcMain} = require('electron')
const {BOOT_CENTER_CHANNELS} = require("../../channels/bootCenter");
const {testData} = require("../../common/testData")
const {MessageValidation} = require("../../errors/errorsIpcDeviceAPI")
const {ipcMessages} = require("../../common/ipcMessages")
const {
    updateValidateSerialBootCenter,
    setPxeDateByImageBootCenter,
    findDeviceAPI,
} = require("./helpers")

ipcMain.handle(BOOT_CENTER_CHANNELS.GET_DEVICES, (event, arg) => {
    return testData
})

ipcMain.handle(BOOT_CENTER_CHANNELS.UPDATE_DEVICE, async (event, {brand, product, model, business, image, newSerial, outAllowed, itemToSearch, ...rest}) => {
    const device = testData.find(device => device.serial === itemToSearch)
    
    if(!device || device === undefined) throw new MessageValidation("Device was not found")

    const index = testData.findIndex(device => device.serial === itemToSearch)
    const validateSerial = await updateValidateSerialBootCenter({newSerial, device})
    
    const date = setPxeDateByImageBootCenter(image)

    const newDevice = {
        ...device,
        ...rest,
        image: (!!image) ? image : device.image,
        model: (!!model && device.model !== model) ? model : device.model,
        brand: (!!image && device.brand !== brand) ? brand : device.brand,
        product: (!!image && device.product !== product) ? product : device.product,
        business: (!!image && device.business !== business) ? business : device.business,
        pxeDate: date,
        serial: validateSerial
    }

    testData.splice(index, 1, newDevice)
    return newDevice

})

ipcMain.handle(BOOT_CENTER_CHANNELS.DELETE_DEVICE, async (event, {serial}) => {
    const index = testData.findIndex(device => device.serial === serial)

    if( (!index || index === undefined) && index !== 0 ) throw new MessageValidation("Device was not found")
    
    return testData.splice(index, 1)[0]
})

ipcMain.handle(BOOT_CENTER_CHANNELS.SET_DEVICE, async (event, {brand, product, model, business, serial, outAllowed}) => {
    const deviceFiltered = await findDeviceAPI(serial)

    if(deviceFiltered?.length > 0) 
        throw new MessageValidation(ipcMessages.SET_DEVICE_API_DEVICE_ALREADY_EXIST)
    if(deviceFiltered?.length === 0) {
        testData.unshift({serial: serial, model: model, brand: brand, 
            product: product, business: business, image: "Sin Imagen",
            entryDate: new Date().toLocaleDateString('en-GB')
        })
        return {brand, product, model, business, serial, outAllowed}
    }
})