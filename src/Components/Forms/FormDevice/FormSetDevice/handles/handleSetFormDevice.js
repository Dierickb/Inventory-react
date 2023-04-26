export const handleSetFormDevice = (e) => {
    e.preventDefault()

    let [brand, product, model, businesses, serial] = e.target.elements
    brand = brand?.value; product = product?.value; serial = serial?.value
    model = model?.value; businesses = businesses.value

    if (brand !== undefined && product !== undefined &&
        model !== undefined && businesses !== undefined &&
        serial !== "/[A-Za-z0-9]/"
    ) {
        return [brand, product, model, businesses, serial]
    }
    return false
}