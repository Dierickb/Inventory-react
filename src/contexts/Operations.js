import {createContext, useContext, useReducer} from "react";
import {ipcOperations} from "../api";
import {brandInitialState} from "../reducers/brand";
import {operationReducer} from "../reducers/operations";
import {OPERATIONS_ACTIONS} from "../actions";

export const OperationsContext = createContext()
const {Provider} = OperationsContext;

const {
    getIpcCustomersOperations,
    getIpcInternOperations
} = ipcOperations()

export const OperationsProvider = ({children}) => {
    const [state, dispatch] = useReducer(operationReducer, brandInitialState)


    const getCustomerOperation = async () => {
        dispatch({
            type: OPERATIONS_ACTIONS.CUSTOMER_OPERATION,
            payload: await getIpcCustomersOperations(),
        })
    }

    const getInternOperation = async () => {
        dispatch({
            type: OPERATIONS_ACTIONS.CUSTOMER_OPERATION,
            payload: await getIpcInternOperations(),
        })
    }

    return <Provider value={{
        getCustomerOperation, getInternOperation ,state,
    }}>{children}</Provider>
}

export const useOperations = () => {
    const context = useContext(OperationsContext)
    if(!context) throw new Error("hooks must be wrapped with OperationsContext")
    return context
}