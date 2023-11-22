const {ipcMain} = require('electron')
const {PRODUCTS_BRAND} = require("../../channels")
const {testBrand} = require("../../common/testData")
const {MessageValidation} = require("../../errors/errorsIpcDeviceAPI")

const arrayToObject = (arr) => {
    return arr.reduce((a, v) => ({ ...a, [v]: []}), {}) 
}

ipcMain.handle(PRODUCTS_BRAND.SET_PROPDUCT, (event, {brand, products}) => {
    try {
        const setNewObjectProducts = arrayToObject(products)
        const index = testBrand.findIndex(brands => brands.brand === brand)

        const oldProduct = testBrand[index].products        
        
        const newProducts = {
            ...oldProduct,
            ...setNewObjectProducts,
        }

        testBrand.splice(index, 1, {
            ...testBrand[index],
            products: newProducts
        })
        
    } catch (e) {
        //throw new MessageValidation(ipcBrandMessages.GET_BRANDS)
    }
})