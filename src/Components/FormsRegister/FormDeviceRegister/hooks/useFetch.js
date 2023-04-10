import {useEffect} from "react";
import {useBrand} from "../../../../contexts"

const useFetch = () => {
    const {getBrands, getModelsByBrand, state} = useBrand()

    useEffect( () => {
        (async () => {
            await getBrands()
        })()
        return () => {
            console.log("Dierik")
        }
    }, [])

    useEffect(() => {
        (async () => {
            await getModelsByBrand("Lenovo", "Laptop")
        })()
    },[state.data])

}

export default useFetch