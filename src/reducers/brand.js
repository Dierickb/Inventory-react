import {BRAND_ACTIONS} from "../actions";

export const brandInitialState = {
    brands: [],
    modelsByBrand: [],
    products: [],
    loading: true,
    error: false,
}

export const brandReducer = (state = brandInitialState, action) => {
    switch (action.type) {
        case BRAND_ACTIONS.GET_BRANDS:
            return {
                ...brandInitialState,
                brands: action.payload,
                loading: false,
            }

        case  BRAND_ACTIONS.GET_PRODUCT_BY_BRAND:
            return {
                ...brandInitialState,
                ...state,
                products: action.payload.map(product => product.product),
                loading: false,
            }
        case BRAND_ACTIONS.SET_PRODUCTS_BY_BRAND:
            return {
                ...brandInitialState,
                ...state,
                products: console.log(action.payload.brand, action.payload.products),
                loading: false,
            }
        case BRAND_ACTIONS.GET_MODELS_BY_BRAND:
            return {
                ...brandInitialState,
                ...state,
                modelsByBrand: action.payload.map(model => model.model),
                loading: false,
            }

        case BRAND_ACTIONS.GET_BRANDS_AND_PRODUCTS:
            return {
                ...brandInitialState,
                products: action.payload.products.map(product => product.product),
                brands: action.payload.brands,
                loading: false,
            }


        default:
            return state;
    }
}