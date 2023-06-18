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
            {serial: serial, model: model, brand: brand, product: product, business: business, image: "Sin Imagen",
                entryDate: new Date().toLocaleDateString('en-GB')
            }
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

    const updateDeviceAPI = async ({brand, product, model, business, image, serial, outAllowed, itemToSearch, ...rest}) => {
        const device = testData.find(device => device.serial === itemToSearch)
        if(!device) return

        const index = testData.findIndex(device => device.serial === itemToSearch)
        const validateSerial = await updateValidateSerial({serial, device})
        const date = setPxeDateByImage(image)

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

    }

    const updateValidateSerial = async ({serial, device}) => {
        if (!!serial && device.serial !== serial) {
            const deviceBySerial = await findDeviceAPI(serial)
            if (!deviceBySerial) return serial
        } else return device.serial
    }

    const setPxeDateByImage = (image) => {
        if(!!image) {
            return new Date().toLocaleDateString('en-GB');
        } else return ""
    }

    const deleteDeviceAPI = async ({serial}) => {
        const index = testData.findIndex(device => device.serial === serial)
        testData.splice(index, 1)
        return !!testData.findIndex(device => device.serial === serial)
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