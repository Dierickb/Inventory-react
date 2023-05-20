import {useEffect} from "react";
import {useBrand} from "../../../../../../contexts"

export const useFetch = () => {
    const {state, getBrandsAndProducts, getModelsByBrand} = useBrand()

    useEffect( () => {
        (async () => {
            await getBrandsAndProducts()
        })()
        return () => {

        }
    }, [])

    const fetchGetModelsByBrands = (typeDevice, brand) => {
        getModelsByBrand(typeDevice, brand)
    }

    return {state, fetchGetModelsByBrands}
}