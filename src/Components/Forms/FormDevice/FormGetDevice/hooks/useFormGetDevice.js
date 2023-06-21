import {useCallback, useEffect, useState} from "react";
import {formDeviceSelectInitialState} from "../../../../../reducers/formDeviceSelect";
import {useBootCenterDevices} from "../../../../../contexts";
import {handleSetFormDevice} from "../../handles";
import {deviceSettingsKeysValues} from "../../../../../utils/utilities";
import PropTypes from "prop-types";

import {MessageValidation} from "../../../../../errors/errorsIpcDeviceAPI"
import {toast} from "react-toastify"

export const useFormGetDevice = (itemToSearch, keyValue) => {
    const [defaultValue, setDefaultValue] = useState(formDeviceSelectInitialState)

    const { updateDevice, deleteDevice } = useBootCenterDevices();
    const { getDevice } = useBootCenterDevices();

    const handleRegister = useCallback(async (e, itemToSearch) => {
        const {brand, product, model, business, serial, outAllowed} = handleSetFormDevice(e)

        if(keyValue === deviceSettingsKeysValues.EDIT_DEVICE)
            !!serial && updateDevice({brand, product, model, business, serial, outAllowed, itemToSearch})
            .then(result => {
                if(result instanceof MessageValidation) toast(`💻 ${result.message}`)
                if(!!result?.serial)
                    toast(`💻 Device ${serial} has been updated`)
            })

        if(keyValue === deviceSettingsKeysValues.DELETE_DEVICE)
            !!serial && deleteDevice({serial}) 
            .then((result) => 
                toast(`💻 Device ${serial} has been removed`)
            )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        (async () => {
            setDefaultValue(await getDevice(itemToSearch))
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemToSearch])

    return {defaultValue, handleRegister}
}

useFormGetDevice.prototype = {
    itemToSearch: PropTypes.string,
    keyValue: PropTypes.string,
}