import { useEffect } from "react"
import { toast } from "react-toastify"

import { ErrorMessageToUI } from "../../../../../errors/errorsIpcDeviceAPI"
import { useBrand } from "../../../../../contexts"

export const useHandleBrand = () => {
    const {state: {brands}, getBrands, setBrand} = useBrand()

    const handleBrand = (e) => {
        e.preventDefault()

        let [brand] = e.target
        brand = brand.value 

        setBrand({brand})
            .then(result => {
                if(result instanceof ErrorMessageToUI) toast(result.message)
            })
            .then(async () => await getBrands())
            
    }

    useEffect(() => {
        (async () => {
            await getBrands()
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        handleBrand,
        brands
    }
} 