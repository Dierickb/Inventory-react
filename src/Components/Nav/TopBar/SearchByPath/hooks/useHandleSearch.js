import {useCallback, useReducer} from "react";
import {inputsFilterDefaultValues, inputType, keyInput} from "../../../../../utils/utilities";
import {FILTER_ACTIONS} from "../../../../../actions";
import {filterInitialState, filtersReducer} from "../../../../../reducers/searchByPath";
import { ErrorMessageToUI } from "../../../../../errors/errorsIpcDeviceAPI";
import {toast} from "react-toastify"

export const useHandleSearch = () => {
    const [state, dispatch] = useReducer(filtersReducer, filterInitialState)
    
    const handleSearchOnChange = useCallback((e) => {
        if(e.nativeEvent.target.localName !== inputType.SELECT) return
        if(e.target.name === inputsFilterDefaultValues.BUSINESS) {
            dispatch({
                type: FILTER_ACTIONS.BUSINESS_BOOT_CENTER,
                payload: {business: e.target.value}
            })
        }
        if(e.target.name === inputsFilterDefaultValues.IMAGE) {        
            dispatch({
                type: FILTER_ACTIONS.IMAGE_BOOT_CENTER,
                payload: {image: e.target.value}
            })
        }
        return () => e.removeAllListeners()
    },[])

    const handleSearchOnKeyPress = useCallback((e, findDeviceBySerial) => {
        if(e.nativeEvent.target.localName !== inputType.INPUT || e.key !== keyInput.ENTER) return
        if(e.target.name === inputsFilterDefaultValues.SERIAL || e.target.name === inputsFilterDefaultValues.SCOTIAID) {
            dispatch({
                type: FILTER_ACTIONS.SERIAL_BOOT_CENTER,
                payload: {serial: e.target.value}
            })
            findDeviceBySerial(e.target.value)
                .then(result => {
                    if(result instanceof ErrorMessageToUI) 
                        toast(result.message)
                })
        }
        return () => e.removeAllListeners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClearFilters = useCallback((e) => {
        dispatch({
            type: FILTER_ACTIONS.CLEAR_FILTER,
            payload: inputsFilterDefaultValues,
        })
        return () => e.removeAllListeners()
    },[])

    return {handleSearchOnKeyPress, handleSearchOnChange, handleClearFilters, state}
}