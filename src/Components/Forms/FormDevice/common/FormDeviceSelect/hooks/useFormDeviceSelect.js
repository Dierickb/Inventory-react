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
    }, [defaultValue])

    useEffect(() => {
        console.log("state brand: ", state.brand)
        console.log("state product: ", state.product)
        fetchGetModelsByBrands(state?.brand, state?.product)
    }, [state.brand, state.product])
}