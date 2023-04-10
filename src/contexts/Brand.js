import {createContext, useContext, useReducer} from "react";
import {brandAPI} from '../api'
import {brandInitialState, brandReducer} from "../reducers/brand";
import {BRAND_ACTIONS} from "../actions";

export const BrandContext = createContext();
const {Provider} = BrandContext;
const {getBrand} = brandAPI();

export const BrandProvider = ({children}) => {
    const [state, dispatch] = useReducer(brandReducer, brandInitialState)

    const getBrands = async () => {
        try {
            dispatch({
                type: BRAND_ACTIONS.GET_BRANDS,
                payload: await getBrand()
            })
        } catch (e) {
            throw e
        }
    }

    const getModelsByBrand = (brandToFind, typeDeviceToFind) => {
        try {
            dispatch({
                type: BRAND_ACTIONS.GET_MODELS_BY_BRAND,
                payload: {
                    brandToFind: brandToFind,
                    typeDeviceToFind: typeDeviceToFind
                },
            })
        } catch (e) {
            throw e
        }
    }

    return <Provider value={{
        getBrands, getModelsByBrand,
        state
    }}>{children}</Provider>
}

export const useBrand = () => {
    const context = useContext(BrandContext)
    if(!context) throw new Error("useBrand must be wrapped with BrandProvider")
    return context
}