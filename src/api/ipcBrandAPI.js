import {getModelsByBrand, testProduct} from "../utils/testData";
import {BRANDS_CHANNELS} from "../channels"

const {ipcRenderer} = window.require("electron")

export const ipcBrandAPI = () => {
    const getBrandAPI = async () => {
        try {
            return await ipcRenderer.invoke(BRANDS_CHANNELS.GET_BRAND)
        } catch (e) {
            throw e;
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

    return {getBrandAPI, getModelsByBrandAPI, getProductAPI}
}