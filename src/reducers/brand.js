import {BRAND_ACTIONS} from "../actions";

export const brandInitialState = {
    brands: [],
    data: [],
    modelsByBrand: [],
    loading: true,
    error: false,
}

export const brandReducer = (state = brandInitialState, action) => {
    switch (action.type) {
        case BRAND_ACTIONS.GET_BRANDS:
            return {
                ...brandInitialState,
                data: action.payload,
                brands: action.payload.map(brand => brand.id),
                loading: false,
            }

        case BRAND_ACTIONS.GET_MODELS_BY_BRAND: {
            const models = []
            const devices = state.data.filter(brand => {
                if(
                    brand.id === action.payload.brandToFind
                ) return brand
            })

            for(let key in devices[0]?.data) {
                if(devices[0]?.data[key] === action.payload.typeDeviceToFind) models.push(key)
            }
            return {
                ...state,
                modelsByBrand: models
            }
        }

        default:
            return state;
    }
}