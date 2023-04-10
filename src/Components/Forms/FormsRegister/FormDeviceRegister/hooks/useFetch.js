import {useEffect} from "react";
import {useBrand} from "../../../../../contexts"

export const useFetch = () => {
    const {getBrands, getModelsByBrand} = useBrand()

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

    return {fetchGetModelsByBrands}
}