import {FILTERS} from "../actions/filter";

export const filtersInitialState = {
    serial: "",
    scotiaId: "",
    image: "",
    business: "",
    filterKey: "",
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
