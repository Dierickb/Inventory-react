import { creatteContext, useContext, useReducer } from "react";
import {ipcBusiness} from "../api";
import {businessInitialState} from "../reducers/business";
import {BUSINESS_ACTIONS} from "../actions";
import {businessReducer} from "../reducers/business";


const {getIpcBusiness} = ipcBusiness()

export const BusinessContext = creatteContext()
const {Provider} = BusinessContext;

export const BusinessProvider = ({children}) => {
    const [state, dispatch] = useReducer(businessReducer, businessInitialState)

    const getBusiness = async () => {
        dispatch({
            type: BUSINESS_ACTIONS.BUSINESS,
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