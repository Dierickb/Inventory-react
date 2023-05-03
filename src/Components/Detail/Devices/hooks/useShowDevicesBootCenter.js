import {useEffect} from "react";

export const useShowDevicesBootCenter = (getDevices, removeAllListeners) => {

    useEffect(() => {
        getDevices()
        return () => removeAllListeners()
    }, [])
}