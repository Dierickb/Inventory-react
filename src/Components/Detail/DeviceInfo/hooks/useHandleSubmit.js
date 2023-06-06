import {useEffect} from "react";
import {useBootCenterDevices} from "../../../../contexts";
import PropTypes from "prop-types";
import {initialStateDeviceInfoSubmit} from "../../../../utils/utilities";
import {eventsNames} from "../utils";

export const useHandleSubmit = ({onSubmitData, device}) => {

    const { getDevices, updateDevice, deleteDevice } = useBootCenterDevices()
    const itemToSearch = device?.serial

    useEffect(() => {
        if(onSubmitData?.submitterName === eventsNames.EVENT_SEND) {
            (async () => await deleteDevice({...device}))()
        }

        if(onSubmitData?.submitterName === eventsNames.EVENT_UPDATE &&
            device !== onSubmitData.data
        ) {
            (async () => await updateDevice({...device, ...onSubmitData.data, itemToSearch}))()
        }

        (async () => await getDevices())()
    }, [onSubmitData?.submitterName, onSubmitData?.data])

}

useHandleSubmit.prototype = {
    onSubmitData: PropTypes.exact(initialStateDeviceInfoSubmit).isRequired
}