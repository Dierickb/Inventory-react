import {inputsFilterTextName} from "../utils/utilities";
import {ipcDeviceAPIExpectedError} from "../errors/expectedErrors"
import {ipcMessages} from "../common/ipcMessages"
import {ErrorMessageToUI} from "../errors/errorsIpcDeviceAPI"
import {BOOT_CENTER_CHANNELS} from "../channels"

const {ipcRenderer} = window.require("electron")

export const ipcDeviceAPI = () => {

    const getDevicesAPI = async () => {
        return await  ipcRenderer.invoke(BOOT_CENTER_CHANNELS.GET_DEVICES)
    }

    const setDeviceAPI = async ({brand, product, model, business, serial, outAllowed}) => {
        try {
            return await ipcRenderer.invoke(BOOT_CENTER_CHANNELS.SET_DEVICE, 
                {brand, product, model, business, serial, outAllowed})
        } catch(e) {
            if(e.message === ipcDeviceAPIExpectedError.setDeviceAPI_DEVICE_ALREADY_EXIST) {
                throw new ErrorMessageToUI(ipcMessages.SET_DEVICE_API_DEVICE_ALREADY_EXIST)}
        }    
    }

    const updateDeviceAPI = async ({brand, product, model, business, image, newSerial, outAllowed, itemToSearch, ...rest}) => {
        try {
            return await  ipcRenderer.invoke(BOOT_CENTER_CHANNELS.UPDATE_DEVICE, 
                {brand, product, model, business, image, newSerial, outAllowed, itemToSearch, ...rest})
        } catch (e) {
            if(e.message === ipcDeviceAPIExpectedError.updateAPI_DEVICE_DOES_NOT_EXIST) {
                console.log(e.message)
                throw new ErrorMessageToUI(ipcMessages.UPDATE_DEVICE_DEVICE_DOES_NOT_EXIST)
            }
        }
    }

    const deleteDeviceAPI = async ({serial}) => {
        try {
            return await  ipcRenderer.invoke(BOOT_CENTER_CHANNELS.DELETE_DEVICE, {serial})
        } catch (e) {
            if(e.message === ipcDeviceAPIExpectedError.deleteDevice_DEVICE_NOT_FOUND) {
                console.log(e.message)
                throw new ErrorMessageToUI(ipcMessages.DELETE_DEVICE)
            }
        }  
    }

    const findDeviceByScotiaIdAPI = async (scotiaId) => {
        try {
            return await ipcRenderer.invoke(BOOT_CENTER_CHANNELS.FIND_DEVICE_BY_SCOTIAID, {scotiaId})
        } catch (e) {
            if(e.message === ipcDeviceAPIExpectedError.finDeviceByScotiaId_DEVICE_NOT_FOUND) 
                throw new ErrorMessageToUI(ipcMessages.DEVICE_NOT_FOUND)
        }
    }

    const findDeviceByBusinessOrImageAPI = async (business, image) => {

        if((image === inputsFilterTextName.IMAGE || !image ) && 
            (business === inputsFilterTextName.BUSINESS || !business) )
            return await getDevicesAPI()

        if(image !== inputsFilterTextName.IMAGE && (business === inputsFilterTextName.BUSINESS || !business))
            return await finByImage({image})

        if( (image === inputsFilterTextName.IMAGE || !image) && business !== inputsFilterTextName.BUSINESS)
            return await findByBusiness({business})

        if(image !== inputsFilterTextName.IMAGE && business !== inputsFilterTextName.BUSINESS)
            return await finByImageAndBusiness({image, business})
    }

    const finByImage = async ({image}) => {
        try {
            return await ipcRenderer.invoke(BOOT_CENTER_CHANNELS.FIND_DEVICE_BY_IMAGE, {image})
        } catch (e) {
            if(e.message === ipcDeviceAPIExpectedError.findByImage_DEVICE_NOT_FOUND) 
                throw new ErrorMessageToUI(ipcMessages.DEVICE_NOT_FOUND)
        } 
    }

    const findByBusiness = async ({business}) => {
        try {
            return await ipcRenderer.invoke(BOOT_CENTER_CHANNELS.FIND_DEVICE_BY_BUSINESS, {business})
        } catch (e) {
            if(e.message === ipcDeviceAPIExpectedError.findByBusiness_DEVICE_NOT_FOUND) 
                throw new ErrorMessageToUI(ipcMessages.DELETE_DEVICE)
        }
    }

    const finByImageAndBusiness = async ({image, business}) => {
        try {
            return await ipcRenderer.invoke(BOOT_CENTER_CHANNELS.FIND_DEVICE_BY_IMAGE_AND_BUSINESS, {business, image})
        } catch (e) {
            if(e.message === ipcDeviceAPIExpectedError.findByBusinessAndImage_DEVICE_NOT_FOUND)
                throw new ErrorMessageToUI(ipcMessages.DEVICE_NOT_FOUND)
        }
    }

    const findDeviceAPI = async (serial) => {
        try {
            return await ipcRenderer.invoke(BOOT_CENTER_CHANNELS.FIND_DEVICE, {serial})
        } catch (e) {
            if(e.message === ipcDeviceAPIExpectedError.setDeviceAPI_DEVICE_ALREADY_EXIST) {
                throw new ErrorMessageToUI(ipcMessages.DEVICE_NOT_FOUND)}
        }
    }

    const removeAllListenersIPC = async () => {
        ipcRenderer.removeAllListeners()
    }

    return {
        getDevicesAPI, setDeviceAPI, findDeviceByScotiaIdAPI,
        findDeviceAPI, updateDeviceAPI, deleteDeviceAPI,
        findDeviceByBusinessOrImageAPI, removeAllListenersIPC,
    }
}