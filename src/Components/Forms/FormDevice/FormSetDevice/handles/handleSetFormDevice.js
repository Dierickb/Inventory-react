export const handleSetFormDevice = (e) => {
    e.preventDefault()

    let [brand, product, model, business, outAllowed, serial] = e.target.elements

    brand = brand?.value; product = product?.value; serial = serial?.value
    model = model?.value; business = business.value; outAllowed = outAllowed?.value

    if (brand !== undefined && product !== undefined &&
         model !== undefined && business !== undefined &&
        serial !== "/[A-Za-z0-9]/"
    ) {
        return {brand, product, model, business, outAllowed, serial}
    }
    return false
}