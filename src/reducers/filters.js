import {FILTERS} from "../actions/filter";
import {inputsFilterDefaultValues} from "../utils/utilities"

export const filtersInitialState = {
    serial: inputsFilterDefaultValues.SERIAL,
    scotiaId: inputsFilterDefaultValues.SCOTIAID,
    image: inputsFilterDefaultValues.IMAGE,
    business: inputsFilterDefaultValues.BUSINESS,
    filterKey: inputsFilterDefaultValues.FILTER_KEY,
    storage: inputsFilterDefaultValues.STORAGE,
}

export const filtersReducer = (state, action) => {
    switch (action.type) {
        case FILTERS.SET_IMAGE:
            return {
                ...state,
                image: action.payload,
                filterKey: action.type,
            }
        case FILTERS.SET_BUSINESS:
            return {
                ...state,
                business: action.payload,
                filterKey: action.type,
            }
        case FILTERS.SET_SERIAL:
            return {
                ...state,
                serial: action.payload,
                filterKey: action.type,
            }
        case FILTERS.SET_SCOTIA_ID:
            return {
                ...state,
                scotiaId: action.payload,
                filterKey: action.type,
            }
        case FILTERS.CLEAR:
            return {
                ...filtersInitialState
            }
        default:
            return state;
    }
}
