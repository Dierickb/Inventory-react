import {testData} from "../utils/testData";
import {inputsFilterTextName} from "../utils/utilities";

export const ipcDeviceAPI = () => {

    const getDevicesAPI = () => {
        return testData
    }

    const setDeviceAPI = async ({brand, product, model, business, serial, outAllowed}) => {
        const deviceFiltered = await findDeviceAPI(serial)

        if(deviceFiltered?.length > 0) console.log("Device Already exist")
        if(deviceFiltered?.length === 0) testData.unshift(
            {serial: serial, model: model, brand: brand, product: product, business: business}
        )
    }

    const findDeviceAPI = async (serial) => {
        return await testData.filter(device => device.serial === serial)
    }

    const findDeviceByScotiaIdAPI = (scotiaId) => {
        if(scotiaId === inputsFilterTextName.SCOTIAID) return getDevicesAPI()
        return testData.filter(device => device.scotiaId === scotiaId)
    }

    const findDeviceByBusinessOrImageAPI = (business, image) => {

        if((image === inputsFilterTextName.IMAGE || !image ) && (business === inputsFilterTextName.BUSINESS || !business) )
            return getDevicesAPI()

        if(image !== inputsFilterTextName.IMAGE && (business === inputsFilterTextName.BUSINESS || !business))
            return testData.filter(device => device.image === image && device)

        if( (image === inputsFilterTextName.IMAGE || !image) && business !== inputsFilterTextName.BUSINESS)
            return testData.filter(device => device.business === business && device)

        if(image !== inputsFilterTextName.IMAGE && business !== inputsFilterTextName.BUSINESS)
            return testData.filter(device => (device.business === business && device.image === image ) && device)
    }

    const updateDeviceAPI = async ({serial}) => {

    }

    const deleteDeviceAPI = async ({serial}) => {
        const index = testData.findIndex(device => device.serial === serial)
        console.log(index)
        testData.splice(index, 1)
    }

    const removeAllListenersIPC = async () => {
        console.log("Remove all listeners")
    }

    return {
        getDevicesAPI, setDeviceAPI, findDeviceByScotiaIdAPI,
        findDeviceAPI, updateDeviceAPI, deleteDeviceAPI,
        findDeviceByBusinessOrImageAPI, removeAllListenersIPC,
    }
}