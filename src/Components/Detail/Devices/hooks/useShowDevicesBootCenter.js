import {useBootCenterDevices} from "../../../../contexts";
import {useEffect} from "react";

const useShowDevicesBootCenter = () => {
    const { getDevices, removeAllListeners, state } = useBootCenterDevices()

    useEffect(() => {
        getDevices()
        return () => removeAllListeners()
    }, [])
    
    return [state, getDevices]
}

export default useShowDevicesBootCenter