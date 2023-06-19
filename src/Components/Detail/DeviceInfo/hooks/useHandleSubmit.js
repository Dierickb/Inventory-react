import {useEffect} from "react";
import {useBootCenterDevices} from "../../../../contexts";
import PropTypes from "prop-types";
import {initialStateDeviceInfoSubmit} from "../../../../utils/utilities";
import {eventsNames} from "../utils";

import {toast} from "react-toastify"

export const useHandleSubmit = ({onSubmitData, device}) => {

    const { getDevices, updateDevice, deleteDevice } = useBootCenterDevices()
    const itemToSearch = device?.serial

    useEffect(() => {
        if(onSubmitData?.submitterName === eventsNames.EVENT_SEND) {
            deleteDevice({...device})
            .then((result) => 
                toast(`💻 Device ${result.serial} has been removed`)
            )
        }

        if(onSubmitData?.submitterName === eventsNames.EVENT_UPDATE &&
            device !== onSubmitData.data
        ) {
            updateDevice({...device, ...onSubmitData.data, itemToSearch})
            .then((result) => 
                toast(`💻 Device ${result.serial} has been updated
                    ${result.image!== device.image ? `with image ${result?.image}` : ""} 
                `)
            )
        }

        (async () => await getDevices())()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onSubmitData?.submitterName, onSubmitData?.data])

}

useHandleSubmit.prototype = {
    onSubmitData: PropTypes.exact(initialStateDeviceInfoSubmit).isRequired
}