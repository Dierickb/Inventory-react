const {testData} = require("../../../common/testData")
const {defaultValues} = require("../../../common/defaultValues")

const updateValidateSerialBootCenter = async ({newSerial, device}) => {
    if(!newSerial || device.serial === newSerial) return device.serial

    const deviceBySerial = await findDeviceAPIBootCenter(newSerial)
    if (deviceBySerial.length === 0) return newSerial

    return device.serial
}

const findDeviceAPIBootCenter = async (serial) => {
    return await testData.filter(device => device.serial === serial)
}

const setPxeDateByImageBootCenter = ({image, pxeDate}) => {
    if((!image || image===defaultValues.image) && !pxeDate) return ""
    if((!image || image===defaultValues.image) && !!pxeDate) return pxeDate
    
    return new Date().toLocaleDateString('en-GB');
}

const findDeviceAPI = async (serial) => {
    return await testData.filter(device => device.serial === serial)
}

const defaultImage = ({image, device}) => {
    if(!!image && image !== defaultValues.image) return image
    if(!image && !!device?.image) return device?.image
    return ""   
}

module.exports = {
    updateValidateSerialBootCenter,
    findDeviceAPIBootCenter,
    setPxeDateByImageBootCenter,
    findDeviceAPI,
    defaultImage,
}