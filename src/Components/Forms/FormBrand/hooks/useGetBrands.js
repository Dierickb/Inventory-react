import { useEffect } from "react"
import { useBrand } from "../../../../contexts"

export const useGetBrands = ({itemToSearch}) => {
    
    const {state, getBrands} = useBrand()
    useEffect(() => {
        getBrands()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemToSearch])

    return {
        state
    }

}