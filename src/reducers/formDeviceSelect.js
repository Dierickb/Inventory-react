import {FORM_DEVICE_SELECT_ACTIONS} from "../actions";

export const formDeviceSelectInitialState = {
    brand: "",
    product: "",
    model: "",
}

export const formDeviceSelect = (state, action) => {
    switch (action.type) {
        case FORM_DEVICE_SELECT_ACTIONS.SET_BRAND:
            return {
                ...formDeviceSelectInitialState,
                brand: action.payload.brand,
                product: state?.brand,
                model: action.payload.model,
            }
        case FORM_DEVICE_SELECT_ACTIONS.SET_PRODUCT:
            return {
                ...formDeviceSelectInitialState,
                product: action.payload.product,
                brand: state?.brand,
                model: action.payload.model,
            }
        case FORM_DEVICE_SELECT_ACTIONS.SET_DEFAULT:
            return {
                ...formDeviceSelectInitialState,
                product: action.payload.product,
                brand: action.payload.brand,
                model: action.payload.model,
            }
        default:
            return state;
    }
}