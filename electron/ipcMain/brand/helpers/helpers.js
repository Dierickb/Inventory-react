const {testBrand} = require("../../../common/testData")

const updateValidateBrand = async ({newBrand, brand}) => {
    if(!newBrand || brand.brand === newBrand) return brand.brand

    const deviceBySerial = await findBrand({newBrand})
    if (deviceBySerial.length === 0) return newBrand

    return brand.brand
}   

const findBrand = async ({brand}) => {
    return await testBrand.filter(brandSelected => brandSelected.brand === brand)
}

module.exports = {
    updateValidateBrand,
    findBrand,
}