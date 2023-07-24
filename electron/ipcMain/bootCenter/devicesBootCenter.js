const {ipcMain} = require('electron')
const {BOOT_CENTER_CHANNELS} = require("../../channels");
const {testData} = require("../../common/testData")
const {MessageValidation} = require("../../errors/errorsIpcDeviceAPI")
const {ipcMessages} = require("../../common/ipcMessages")
const {
    updateValidateSerialBootCenter,
    setPxeDateByImageBootCenter,
    findDeviceAPI,
    defaultImage,
} = require("./helpers")

ipcMain.handle(BOOT_CENTER_CHANNELS.GET_DEVICES, (event, arg) => {
    return testData
})

ipcMain.handle(BOOT_CENTER_CHANNELS.UPDATE_DEVICE, async (event, {brand, product, model, business, image, newSerial, outAllowed, itemToSearch, ...rest}) => {
    const device = testData.find(device => device.serial === itemToSearch)
    
    if(!device || device === undefined) throw new MessageValidation(ipcMessages.DEVICE_DOES_NOT_EXIST)

    const index = testData.findIndex(device => device.serial === itemToSearch)
    const validateSerial = await updateValidateSerialBootCenter({newSerial, device})
    
    const date = setPxeDateByImageBootCenter({image, ...device})
    const realImage = defaultImage({image, device})

    const newDevice = {
        ...device,
        ...rest,
        image: realImage,
        model: (!!model && device.model !== model) ? model : device.model,
        brand: (!!brand && device.brand !== brand) ? brand : device.brand,
        product: (!!product && device.product !== product) ? product : device.product,
        business: (!!business && device.business !== business) ? business : device.business,
        pxeDate: date,
        serial: validateSerial
    }

    testData.splice(index, 1, newDevice)
    return newDevice

})

ipcMain.handle(BOOT_CENTER_CHANNELS.DELETE_DEVICE, async (event, {serial}) => {
    const index = testData.findIndex(device => device.serial === serial)

    if( (!index || index === undefined) && index !== 0 ) throw new MessageValidation(ipcMessages.DEVICE_DOES_NOT_EXIST)
    
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

ipcMain.handle(BOOT_CENTER_CHANNELS.FIND_DEVICE, async (event, {serial}) => {
    const device = testData.filter(device => device.serial === serial)

    if(device?.length < 1) 
        throw new MessageValidation(ipcMessages.DEVICE_NOT_FOUND)

    return device
})

ipcMain.handle(BOOT_CENTER_CHANNELS.FIND_DEVICE_BY_SCOTIAID, (event, {scotiaId}) => {
    const device = testData.filter(device => device.scotiaId === scotiaId)

    if(device?.length < 1) 
        throw new MessageValidation(ipcMessages.DEVICE_NOT_FOUND)

    return device
})

ipcMain.handle(BOOT_CENTER_CHANNELS.FIND_DEVICE_BY_IMAGE, (event, {image}) => {
    const device = testData.filter(device => device.image === image)

    if(device?.length < 1) 
        throw new MessageValidation(ipcMessages.DEVICE_NOT_FOUND)

    return device
})

ipcMain.handle(BOOT_CENTER_CHANNELS.FIND_DEVICE_BY_BUSINESS, (event, {business}) => {
    const device = testData.filter(device => (device.business === business) )
    if(device?.length < 1) 
        throw new MessageValidation(ipcMessages.DEVICE_NOT_FOUND)

    return device
})

ipcMain.handle(BOOT_CENTER_CHANNELS.FIND_DEVICE_BY_IMAGE_AND_BUSINESS, (event, {business, image}) => {
    const device = testData.filter(device => (device.business === business && device.image === image ) )
    if(device?.length < 1) 
        throw new MessageValidation(ipcMessages.DEVICE_NOT_FOUND)

    return device
})
