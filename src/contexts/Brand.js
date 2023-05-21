import {createContext, useContext, useReducer} from "react";
import {brandInitialState, brandReducer} from "../reducers/brand";
import {BRAND_ACTIONS} from "../actions";
import {ipcBrandAPI} from "../api";

export const BrandContext = createContext();
const {Provider} = BrandContext;
const {getBrandAPI, getProductAPI, getModelsByBrandAPI} = ipcBrandAPI();

export const BrandProvider = ({children}) => {
    const [state, dispatch] = useReducer(brandReducer, brandInitialState)

    const getBrands = async () => {
        try {
            dispatch({
                type: BRAND_ACTIONS.GET_BRANDS,
                payload: await getBrandAPI()
            })
        } catch (e) {
            throw e
        }
    }

    const getProducts = async () => {
        try {
            dispatch({
                type: BRAND_ACTIONS.GET_PRODUCT_BY_BRAND,
                payload: await getProductAPI()
            })
        } catch (e) {
            throw e
        }
    }

    const getModelsByBrand = async (brand, product) => {
        try {
            dispatch({
                type: BRAND_ACTIONS.GET_MODELS_BY_BRAND,
                payload: await getModelsByBrandAPI({brand, product})
            })
        } catch (e) {
            throw e
        }
    }

    const getBrandsAndProducts = async () => {
        dispatch({
            type: BRAND_ACTIONS.GET_BRANDS_AND_PRODUCTS,
            payload: {
                brands: await getBrandAPI(),
                products: await getProductAPI()
            }
        })
    }

    return <Provider value={{
        getBrands, getModelsByBrand, getProducts, getBrandsAndProducts,
        state
    }}>{children}</Provider>
}

export const useBrand = () => {
    const context = useContext(BrandContext)
    if(!context) throw new Error("useBrand must be wrapped with BrandProvider")
    return context
}