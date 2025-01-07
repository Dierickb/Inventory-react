import {FILTER_ACTIONS} from "../actions";
import { inputsFilterDefaultValues } from "../utils/utilities";

export const filterInitialState = {
    serial: inputsFilterDefaultValues.SERIAL,
    business: inputsFilterDefaultValues.BUSINESS,
    image: inputsFilterDefaultValues.IMAGE,
    scotiaId: inputsFilterDefaultValues.SCOTIAID,
    storage: inputsFilterDefaultValues.STORAGE,
}

export const filtersReducer = (state, action) => {
    switch (action.type) {
        case FILTER_ACTIONS.SERIAL_BOOT_CENTER:
            return {
                ...filterInitialState,
                serial: action.payload.serial,
            }
        case FILTER_ACTIONS.BUSINESS_BOOT_CENTER:
            return {
                ...filterInitialState,
                business: action.payload.business,
                image: state.image || inputsFilterDefaultValues.IMAGE,
                storage: state.storage || inputsFilterDefaultValues.STORAGE,
            }
        case FILTER_ACTIONS.IMAGE_BOOT_CENTER:
            return {
                ...filterInitialState,
                image: action.payload.image,
                business: state.business || inputsFilterDefaultValues.BUSINESS,
                storage: state.storage || inputsFilterDefaultValues.STORAGE,
            }
        case FILTER_ACTIONS.CLEAR_FILTER:
            return action.payload

        case FILTER_ACTIONS.STORAGE_BOOT_CENTER:
            return {
                ...filterInitialState,
                storage: action.payload.storage,
                business: state.business || inputsFilterDefaultValues.BUSINESS,
                image: state.image || inputsFilterDefaultValues.IMAGE,
            }

        default:
            return state
    }
}