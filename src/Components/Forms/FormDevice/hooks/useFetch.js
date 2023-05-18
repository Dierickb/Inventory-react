import {useEffect} from "react";
import {useBrand} from "../../../../contexts"

export const useFetch = () => {
    const {state, getBrands, getModelsByBrand} = useBrand()

    useEffect( () => {
        (async () => {
            await getBrands()
        })()
        return () => {

        }
    }, [])

    const fetchGetModelsByBrands = (typeDevice, brand) => {
        getModelsByBrand(typeDevice, brand)
    }

    return {state, fetchGetModelsByBrands}
}