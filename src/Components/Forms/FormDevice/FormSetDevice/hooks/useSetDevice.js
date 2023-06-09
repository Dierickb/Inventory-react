import { useCallback } from "react";
import {useBootCenterDevices} from "../../../../../contexts";
import {handleSetFormDevice} from "../../handles";

export const useSetDevice = () => {
    const { setDevice } = useBootCenterDevices();

    const handleRegister = useCallback( (e) => {
        const {brand, product, model, business, outAllowed, serial} = handleSetFormDevice(e)
        setDevice({brand, product, model, business, serial, outAllowed})
    },[])

    return {handleRegister}
}