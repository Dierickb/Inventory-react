import { createContext, useContext, useReducer } from "react";
import {ipcBusiness} from "../api";
import {businessInitialState} from "../reducers/business.js";
import {BUSINESS_ACTIONS} from "../actions";
import {businessReducer} from "../reducers/business.js";


const {getIpcBusiness} = ipcBusiness()

export const BusinessContext = createContext()
const {Provider} = BusinessContext;

export const BusinessProvider = ({children}) => {
    const [state, dispatch] = useReducer(businessReducer, businessInitialState)

    const getBusiness = async () => {
        dispatch({
            type: BUSINESS_ACTIONS.GET_BUSINESSES,
            payload: await getIpcBusiness(),
        })
    }

    return <Provider value={{
        getBusiness, state,
    }}>{children}</Provider>
}

export const useBusiness = () => {
    const context = useContext(BusinessContext)
    if(!context) throw new Error("hooks must be wrapped with BusinessContext")
    return context
}   