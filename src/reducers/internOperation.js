import {INTERN_OPERATION_ACTIONS} from "../actions";

export const internOperationInitialState = {
    internOperation: [],
    loading: true,
    error: false,
}

export const internOperationReducer = (state = internOperationInitialState, action) => {
    switch (action.type) {
        case INTERN_OPERATION_ACTIONS.GET_INTERN_OPERATION:
            return {
                ...internOperationInitialState,
                internOperation: action.payload.map(internOperations => internOperations.internOperation),
                loading: false,
            }

        default:
            return state;
    }
}