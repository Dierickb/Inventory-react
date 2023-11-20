import { useEffect } from "react"
import { toast } from "react-toastify"

import { ErrorMessageToUI } from "../../../../../errors/errorsIpcDeviceAPI"
import { useBrand } from "../../../../../contexts"

export const useHandleBrand = () => {
    const {state: {brands}, getBrands, setBrand} = useBrand()

    const handleBrand = async (e) => {
        e.preventDefault()

        let [brand] = e.target
        brand = brand.value 

        const result = await setBrand({brand})
        if(result instanceof ErrorMessageToUI) {toast(result.message) ; return}
        
        toast(`Brand ${brand} added successfully`)
        await getBrands()
            
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