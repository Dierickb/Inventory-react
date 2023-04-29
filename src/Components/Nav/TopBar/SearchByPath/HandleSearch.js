import {useCallback, useReducer} from "react";
import {inputsFilterText, inputType, keyInput} from "../../../../utils/utilities";
import {FILTER_ACTIONS} from "../../../../actions";
import {filterInitialState, filtersReducer} from "../../../../reducers/searchByPath";

const HandleSearch = () => {
    const [state, dispatch] = useReducer(filtersReducer, filterInitialState)

    const handleSearchOnChange = useCallback((e) => {
        if(e.nativeEvent.target.localName !== inputType.SELECT) return
        if(e.target.name === inputsFilterText.BUSINESS) {
            dispatch({
                type: FILTER_ACTIONS.BUSINESS_BOOT_CENTER,
                payload: {business: e.target.value}
            })
        }
        if(e.target.name === inputsFilterText.IMAGE) {
            dispatch({
                type: FILTER_ACTIONS.IMAGE_BOOT_CENTER,
                payload: {image: e.target.value}
            })
        }
    },[])

    const handleSearchOnKeyPress = useCallback((e) => {
        if(e.nativeEvent.target.localName !== inputType.INPUT || e.key !== keyInput.ENTER) return
        if(e.target.name === inputsFilterText.SERIAL) {
            dispatch({
                type: FILTER_ACTIONS.SERIAL_BOOT_CENTER,
                payload: {serial: e.target.value}
            })
        }
    }, [])

    return {handleSearchOnKeyPress, handleSearchOnChange, state}
}

export default HandleSearch