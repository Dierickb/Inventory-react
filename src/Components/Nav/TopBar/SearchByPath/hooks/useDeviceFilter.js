import {useEffect} from "react";
import {useBootCenterDevices} from "../../../../../contexts";
import {FILTERS} from "../../../../../actions/filter";

export const useDeviceFilter = (filterState, findDevice, findDeviceByBusinessOrImage, setFilter) => {

    useEffect(() => {
        if(!filterState.serial || !filterState?.scotiaId) return

        if(!!filterState.serial) setFilter(FILTERS.SET_SERIAL, filterState?.serial)
        if(!!filterState.scotiaId) setFilter(FILTERS.SET_SCOTIA_ID, filterState?.scotiaId)

        filterState.serial && findDevice(filterState?.serial)
        return () => console.log("Closed")
    }, [filterState.serial])

    useEffect(() => {
        if(!filterState.image && !filterState.business) return

        if(!!filterState.business) setFilter(FILTERS.SET_BUSINESS, filterState?.business)
        if(!!filterState.image) setFilter(FILTERS.SET_IMAGE, filterState?.image)

        findDeviceByBusinessOrImage(filterState?.business, filterState?.image)
        return () => console.log("Closed")
    }, [filterState.image, filterState.business])
}