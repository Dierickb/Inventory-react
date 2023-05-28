import {useEffect} from "react";
import {FILTERS} from "../../../../../actions";

export const useDeviceFilter = (filterState, findDeviceBySerial,
                                findDeviceByBusinessOrImage, findDeviceByScotiaId, setFilter) => {

    useEffect(() => {
        setFilter(FILTERS.SET_SERIAL, filterState?.serial)
        findDeviceBySerial(filterState?.serial)
        return () => console.log("Closed")
    }, [filterState?.serial])

    useEffect(() => {
        setFilter(FILTERS.SET_SCOTIA_ID, filterState?.scotiaId)
        findDeviceByScotiaId(filterState?.scotiaId)
        return () => console.log("Closed")
    }, [filterState?.scotiaId])

    useEffect(() => {
        if(!filterState.image && !filterState.business) return

        if(!!filterState.business) setFilter(FILTERS.SET_BUSINESS, filterState?.business)
        if(!!filterState.image) setFilter(FILTERS.SET_IMAGE, filterState?.image)

        findDeviceByBusinessOrImage(filterState?.business, filterState?.image)
        return () => console.log("Closed")
    }, [filterState?.image, filterState?.business])
}