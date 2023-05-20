import {getModelsByBrand, testBrand, testProduct} from "../utils/testData";

export const ipcBrandAPI = () => {
    const getBrandAPI = async () => {
        try {
            return await testBrand
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