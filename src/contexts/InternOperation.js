import { createContext, useContext, useReducer } from "react";
import {ipcInternOperation} from "../api";
import {internOperationInitialState} from "../reducers/internOperation.js";
import {INTERN_OPERATION_ACTIONS} from "../actions";
import {internOperationReducer} from "../reducers/internOperation.js";


const {getIpcInternOperations} = ipcInternOperation()

export const InternOperationContext = createContext()
const {Provider} = InternOperationContext;

export const InternOperationProvider = ({children}) => {
    const [state, dispatch] = useReducer(internOperationReducer, internOperationInitialState)


    const getInternOperation = async () => {
        dispatch({
            type: INTERN_OPERATION_ACTIONS.GET_INTERN_OPERATION,
            payload: await getIpcInternOperations(),
        })
    }

    return <Provider value={{
        getInternOperation, state,
    }}>{children}</Provider>
}

export const useInternOperation = () => {
    const context = useContext(InternOperationContext)
    if(!context) throw new Error("hooks must be wrapped with InternOperationContext")
    return context
}