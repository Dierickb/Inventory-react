import {getModelsByBrand, testProduct} from "../utils/testData";
import {BRANDS_CHANNELS} from "../channels"
import {ipcBrandMessage} from "../common/ipcMessages"
import {ErrorMessageToUI} from "../errors/errorsIpcDeviceAPI"
import {ipcBrandAPIExpectedError} from "../errors/expectedErrors"

const {ipcRenderer} = window.require("electron")

export const ipcBrandAPI = () => {
    const getBrandAPI = async () => {
        try {
            return await ipcRenderer.invoke(BRANDS_CHANNELS.GET_BRAND)
        } catch (e) {
            throw new ErrorMessageToUI(e.message)
        }
    }

    const setBrandAPI = async ({brand}) => {
        try {
            await ipcRenderer.invoke(BRANDS_CHANNELS.SET_BRAND, {brand})
        } catch (e) {
            if (e.message === ipcBrandAPIExpectedError.setBranAPI_BRAND_ALREADY_EXIST) 
                throw new ErrorMessageToUI(ipcBrandMessage.BRAND_ALREADY_EXIST)
        }
    }

    const updateBrandAPI = async ({brandToFind, newBrand}) => {
        try {
            return await ipcRenderer.invoke(BRANDS_CHANNELS.UPDATE_BRAND, {brandToFind, newBrand})
        } catch (e) {
            throw new ErrorMessageToUI(e.message)
        }
    }

    const getProductAPI = async () => {
        try {
            return await testProduct
        } catch (e) {
            throw e
        }
    }

    const getModelsByBrandAPI = async({brand, product}) => {
        try {
            return await getModelsByBrand.filter(device => (brand === device.brand && product === device.product))
        } catch (e) {
            throw e
        }
    }

    return {getBrandAPI, getModelsByBrandAPI, getProductAPI, setBrandAPI, updateBrandAPI}
}