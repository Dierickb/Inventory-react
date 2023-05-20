import {useCallback, useEffect, useState} from "react";
import {formDeviceSelectInitialState} from "../../../../../reducers/formDeviceSelect";
import {useBootCenterDevices} from "../../../../../contexts";
import {handleSetFormDevice} from "../../handles";
import {deviceSettingsKeysValues} from "../../../../../utils/utilities";

export const useFormGetDevice = (itemToSearch, keyValue) => {
    const [defaultValue, setDefaultValue] = useState(formDeviceSelectInitialState)

    const { updateDevice, deleteDevice } = useBootCenterDevices();
    const { getDevice } = useBootCenterDevices();

    const handleRegister = useCallback(async (e, itemToSearch) => {
        const {brand, product, model, business, serial, outAllowed} = handleSetFormDevice(e)

        if(keyValue === deviceSettingsKeysValues.EDIT_DEVICE)
            !!serial && await updateDevice({brand, product, model, business, serial, outAllowed, itemToSearch})

        if(keyValue === deviceSettingsKeysValues.DELETE_DEVICE)
            !!serial && await deleteDevice({serial})

    },[])

    useEffect(() => {
        (async () => {
            setDefaultValue(await getDevice(itemToSearch))
        })()
    }, [itemToSearch])

    return {defaultValue, handleRegister}
}