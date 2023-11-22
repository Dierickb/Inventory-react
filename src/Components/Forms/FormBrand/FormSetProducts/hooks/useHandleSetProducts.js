import { useBrand } from "../../../../../contexts"

export const useHandleSetProducts = () => {
    const {setProducts} = useBrand()

    const handleSetProduct = async (e) => {
        e.preventDefault()
        const regularExpression = /[(, )(,)( )(;)(; )(.)(. )(\n)]+/
        let [brand, product] = e.target
        let products = []
        brand = brand.value
        
        products = product.value.split(regularExpression).filter(Boolean)

        await setProducts({brand, products})
    }

    return {
        handleSetProduct
    }
}