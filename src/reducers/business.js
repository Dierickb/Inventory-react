import {BUSINESS_ACTIONS} from "../actions";

export const businessInitialState = {
    business: [],
    loading: true,
    error: false,
}

export const businessReducer = (state = businessInitialState, action) => {
    switch (action.type) {
        case BUSINESS_ACTIONS.GET_BUSINESSES:
            return {
                ...businessInitialState,
                business: action.payload.map(business => business.business),
                loading: false,
            }

        default:
            return state;
    }
}