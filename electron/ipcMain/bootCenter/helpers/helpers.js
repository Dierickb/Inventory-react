const {testData} = require("../../../common/testData")

const updateValidateSerialBootCenter = async ({newSerial, device}) => {
    if(!newSerial || device.serial === newSerial) return device.serial

    const deviceBySerial = await findDeviceAPIBootCenter(newSerial)
    if (deviceBySerial.length === 0) return newSerial

    return device.serial
}

const findDeviceAPIBootCenter = async (serial) => {
    return await testData.filter(device => device.serial === serial)
}

const setPxeDateByImageBootCenter = (image) => {
    if(!!image) {
        return new Date().toLocaleDateString('en-GB');
    } else return ""
}

const findDeviceAPI = async (serial) => {
    return await testData.filter(device => device.serial === serial)
}

module.exports = {
    updateValidateSerialBootCenter,
    findDeviceAPIBootCenter,
    setPxeDateByImageBootCenter,
    findDeviceAPI,
}