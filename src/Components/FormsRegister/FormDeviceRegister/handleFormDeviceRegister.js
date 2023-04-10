export const handleFormDeviceRegister = (e) => {
    e.preventDefault()
    const [brand, product, model, businesses, serial] = e.target.elements

    if (brand?.value !== undefined && product?.value !== undefined &&
        model?.value !== undefined && businesses?.value !== undefined &&
        serial?.value !== "/[A-Za-z0-9]/"
    ) {
        /*
            setDevice({
                brand: brand?.value,
                product: product?.value,
                model: model?.value,
                businesses: businesses?.value,
                serial: serial?.value
            })
            serial.value = ""
         */
        console.log("Dierick")
    }
}