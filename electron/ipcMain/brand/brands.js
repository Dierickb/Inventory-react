const {ipcMain} = require('electron')
const {BRANDS_CHANNELS} = require("../../channels")
const {testBrand} = require("../../common/testData")
const {ipcBrandMessages} = require("../../common/ipcMessages")
const {MessageValidation} = require("../../errors/errorsIpcDeviceAPI")

const {findBrand, updateValidateBrand} = require("./helpers")

ipcMain.handle(BRANDS_CHANNELS.GET_BRAND, (event) => {
    try {
        return testBrand.map(brand => brand.brand)
    } catch (e) {
        throw new MessageValidation(ipcBrandMessages.GET_BRANDS)
    }
})

ipcMain.handle(BRANDS_CHANNELS.SET_BRAND, async (event, {brand}) => {
    try {
        const validationBrand = await findBrand({brand})
        if(validationBrand?.length > 0) throw new MessageValidation(ipcBrandMessages.BRAND_ALREADY_EXIST)

        console.log(validationBrand)

        testBrand.unshift({id: testBrand.length+1, brand:brand})

    } catch (e) {
        throw new MessageValidation(ipcBrandMessages.BRAND_ALREADY_EXIST)
    }
})

ipcMain.handle(BRANDS_CHANNELS.UPDATE_BRAND, async (event, {brandToFind, newBrand}) => {
    try {
        const brand = findBrand(brandToFind)
        if(brand?.length < 1) throw new MessageValidation(ipcBrandMessages.BRAND_NOT_FOUND)

        const index = testBrand.findIndex(brand => brand.brand === brandToFind)
        const validateBrand = await updateValidateBrand({newBrand, brand})

        const postBrand = {
            ...brand,
            brand: validateBrand,
        }

        testBrand.splice(index, 1, postBrand)

        return postBrand

    } catch (e) {
        throw new MessageValidation(ipcBrandMessages.BRAND_NOT_FOUND)
    }
})

ipcMain.handle(BRANDS_CHANNELS.DELETE_BRAND, (event, {brandToFind}) => {
    try {
        const index = testBrand.findIndex(brand => brand.brand === brandToFind)
        if(index < 0) throw new MessageValidation(ipcBrandMessages.BRAND_NOT_FOUND)

        testBrand.splice(index, 1)

        return testBrand

    } catch (e) {

    }
} )