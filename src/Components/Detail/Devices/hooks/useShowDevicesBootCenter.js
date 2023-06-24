import {useEffect} from "react";
import { useLocation } from "react-router-dom";

import {useBootCenterDevices} from "../../../../contexts";

export const useShowDevicesBootCenter = () => {
    let location = useLocation();
    let state, setFindDevice, removeListener

    const { getDevices: getDevicesBootCenter, 
        state: stateBootCenter, 
        setFindDevice: setFindDeviceBootCenter, 
        removeAllListeners: removeAllListenersBootCenter
    } =  useBootCenterDevices()

    if(location.pathname === "/dashboard" || location.pathname === "/dashboard/" || location.pathname ==="/dashboard/internOperation") {
        removeListener = removeAllListenersBootCenter
    }

    useEffect(() => {
        if(location.pathname === "/dashboard" || location.pathname === "/dashboard/" || location.pathname ==="/dashboard/internOperation") getDevicesBootCenter()
        return () => removeListener()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(location.pathname === "/dashboard" || location.pathname === "/dashboard/" || location.pathname ==="/dashboard/internOperation") {
        state = stateBootCenter
        setFindDevice = setFindDeviceBootCenter
    }

    return {state, setFindDevice}
}