import {useCallback, useReducer} from "react";
import { inputsFilterDefaultValues } from "../../../../utils/utilities";
import { FILTER_ACTIONS } from "../../../../actions";
import {filterInitialState, filtersReducer} from "../../../../reducers/searchByPath";

export const useHandleStorage = () => {
    const [state, dispatch] = useReducer(filtersReducer, filterInitialState)

    const handleStorageOnChange = useCallback((e) => {
        if(e.target.name === inputsFilterDefaultValues.STORAGE) {
            dispatch({
                type: FILTER_ACTIONS.STORAGE_BOOT_CENTER,
                payload: {storage: e.target.value}
            })
        }
        return () => e.removeAllListeners()
    },[])

    return {handleStorageOnChange, state}

}