import {testData} from "../utils/testData";
import {inputsFilterTextName} from "../utils/utilities";

export const ipcDeviceAPI = () => {

    const getDevicesAPI = () => {
        return testData
    }

    const getDeviceInfoAPI = async () => {

    }

    const setDeviceAPI = async (brand, product, model, businesses, serial) => {

    }

    const findDeviceAPI = (serial) => {
        if(serial === inputsFilterTextName.SERIAL) return getDevicesAPI()
        return testData.filter(device => device.serial === serial)
    }

    const findDeviceByBusinessOrImageAPI = (business, image) => {

        if((image === inputsFilterTextName.IMAGE || !image ) && (business === inputsFilterTextName.BUSINESS || !business) )
            return getDevicesAPI()

        if(image !== inputsFilterTextName.IMAGE && (business === inputsFilterTextName.BUSINESS || !business))
            return testData.filter(device => device.image === image && device)

        if( (image === inputsFilterTextName.IMAGE || !image) && business !== inputsFilterTextName.BUSINESS)
            return testData.filter(device => device.scotia === business && device)

        if(image !== inputsFilterTextName.IMAGE && business !== inputsFilterTextName.BUSINESS)
            return testData.filter(device => (device.scotia === business && device.image === image ) && device)
    }

    const updateDeviceAPI = async (serial) => {

    }

    const deleteDeviceAPI = async () => {

    }

    return {
        getDevicesAPI, getDeviceInfoAPI, setDeviceAPI,
        findDeviceAPI, updateDeviceAPI, deleteDeviceAPI,
        findDeviceByBusinessOrImageAPI
    }
}