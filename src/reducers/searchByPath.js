import {FILTER_ACTIONS} from "../actions";

export const filterInitialState = {
    serial: "",
    business: "",
    image: "",
    scotiaId: "",
    data: [],
}

export const filtersReducer = (state, action) => {

    switch (action.type) {
        case FILTER_ACTIONS.SERIAL_BOOT_CENTER: {
            return {
                ...filterInitialState,
                serial: action.payload.serial,
            }
        }
        case FILTER_ACTIONS.BUSINESS_BOOT_CENTER: {
            return {
                ...filterInitialState,
                business: action.payload.business,
                image: state.image || "",
            }
        }
        case FILTER_ACTIONS.IMAGE_BOOT_CENTER: {
            return {
                ...filterInitialState,
                image: action.payload.image,
                business: state.business || "",
            }
        }
        default:
            return state
    }
}