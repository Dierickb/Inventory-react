export const handleFormDeviceRegister = (e) => {
    e.preventDefault()
    let [brand, product, model, businesses, serial] = e.target.elements

    if (brand?.value !== undefined && product?.value !== undefined &&
        model?.value !== undefined && businesses?.value !== undefined &&
        serial?.value !== "/[A-Za-z0-9]/"
    ) {
        console.log("Dierick")
    }
}