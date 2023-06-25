import {useEffect} from "react";
import {FILTERS} from "../../../../../actions";
import { ErrorMessageToUI } from "../../../../../errors/errorsIpcDeviceAPI";
import {toast} from "react-toastify"

export const useDeviceFilter = (filterState, findDeviceByBusinessOrImage, 
    findDeviceByScotiaId, setFilter, removeAllListeners) => {

    useEffect(() => {
        setFilter(FILTERS.SET_SERIAL, filterState?.serial)
        return () => removeAllListeners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterState?.serial])

    useEffect(() => {
        setFilter(FILTERS.SET_SCOTIA_ID, filterState?.scotiaId)
        findDeviceByScotiaId(filterState?.scotiaId)
        return () => removeAllListeners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterState?.scotiaId])

    useEffect(() => {
        if(!filterState.image && !filterState.business) return

        if(!!filterState.business) setFilter(FILTERS.SET_BUSINESS, filterState?.business)
        if(!!filterState.image) setFilter(FILTERS.SET_IMAGE, filterState?.image)
        
        findDeviceByBusinessOrImage(filterState?.business, filterState?.image)
            .then(result => {
                if(result instanceof ErrorMessageToUI) 
                    toast(result.message)
            })
        return () => removeAllListeners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterState?.image, filterState?.business])
}