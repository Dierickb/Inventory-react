import {OPERATIONS_ACTIONS} from "../actions";

export const formOperations = {
    internOperation: [],
    customerOperation: [],
}

export const operationReducer = (state, action) => {
    switch (action.type) {
        case OPERATIONS_ACTIONS.INTERN_OPERATION:
            return {
                ...formOperations,
                internOperation: action.payload.map(operation => operation.operation),
            }
        case OPERATIONS_ACTIONS.CUSTOMER_OPERATION:
            return {
                ...formOperations,
                ...state,
                customerOperation: action.payload.map(operation => operation.customerOperation)
            }
        default:
            return state;
    }
}