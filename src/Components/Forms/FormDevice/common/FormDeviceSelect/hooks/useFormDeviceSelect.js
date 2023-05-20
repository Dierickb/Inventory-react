import {useEffect} from "react";
import {FORM_DEVICE_SELECT_ACTIONS} from "../../../../../../actions";

export const useFormDeviceSelect = ({dispatch, state, fetchGetModelsByBrands, defaultValue}) => {

    useEffect(() => {
        dispatch({
            type: FORM_DEVICE_SELECT_ACTIONS.SET_DEFAULT,
            payload: {
                brand: defaultValue?.brand,
                product: defaultValue?.product,
                model: defaultValue?.model,
            }
        })
    }, [defaultValue?.brand, defaultValue?.product, defaultValue?.model])

    useEffect(() => {
        fetchGetModelsByBrands(state?.brand, state?.product)
    }, [state.brand, state.product])
}