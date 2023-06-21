import {createContext, useContext, useReducer} from "react";
import {deviceInitialState, devicesReducer} from "../reducers/devices";
import {DEVICE_ACTIONS, FILTERS} from "../actions";
import {ipcDeviceAPI} from "../api";
import PropTypes from "prop-types";
import {ipcMessages} from "../common/ipcMessages"
import {ValidationError, ConnectionError, MessageValidation} from "../errors/errorsIpcDeviceAPI"

export const BootCenterDevicesContext = createContext();
const {Provider} = BootCenterDevicesContext;
const {getDevicesAPI,
    setDeviceAPI,
    updateDeviceAPI,
    deleteDeviceAPI,
    findDeviceAPI,
    findDeviceByBusinessOrImageAPI,
    findDeviceByScotiaIdAPI,
    removeAllListenersIPC,
} = ipcDeviceAPI()

export const BootCenterDevicesProvider = ({children}) => {
    const [state, dispatch] = useReducer(devicesReducer, deviceInitialState)

    const getDevices = async () => {
        dispatch({
            type: DEVICE_ACTIONS.GET_DEVICES,
            payload: {devices: await getDevicesAPI()}
        })
    }


    const getDevice = async (serial) => {
        const value = await findDeviceAPI(serial)
        return value[0]
    }

    const setDevice = async ({brand, product, model, business, serial, outAllowed}) => {
        try {
            await setDeviceAPI(
                {brand, product, model, business, serial, outAllowed}
            )
        } catch(e) {
            if(e instanceof MessageValidation && 
                e.message === ipcMessages.SET_DEVICE_DEVICE_UPLOADED) {
                await getDevices()
                return e
            }
            if(e instanceof MessageValidation) return e
            //if(e instanceof ConnectionError) 
        }
        
    }

    const updateDevice = async ({brand, product, model, business, serial: newSerial,
                                    outAllowed, itemToSearch, image, ...rest}) => {
        try {
            return await updateDeviceAPI({brand, product, model,
                business, newSerial, outAllowed, itemToSearch, image, ...rest})
        } catch (e) {
            if(e instanceof MessageValidation) return e
        }
        
    }
    const deleteDevice = async ({serial}) => {
        return await deleteDeviceAPI({serial})
    }

    const findDeviceBySerial = async (serial) => {
        dispatch({
            type: DEVICE_ACTIONS.GET_DEVICES,
            payload: {devices:
                (!serial) ? await getDevicesAPI()
                    : await findDeviceAPI(serial)
            }
        })
    }

    const findDeviceByScotiaId = async (scotiaId) => {
        dispatch({
            type: DEVICE_ACTIONS.GET_DEVICES,
            payload: {devices:
                (!scotiaId) ? await getDevicesAPI()
                    : await findDeviceByScotiaIdAPI(scotiaId)
            }
        })
    }

    const findDeviceByBusinessOrImage = async (business, image) => {
        dispatch({
            type: DEVICE_ACTIONS.GET_DEVICES,
            payload: {devices: await findDeviceByBusinessOrImageAPI(business, image)}
        })
    }

    const setFindDevice = async (filterState) => {
        if(FILTERS.CLEAR === filterState.filterKey) await getDevices()
        if(FILTERS.SET_SERIAL === filterState.filterKey)
            await findDeviceBySerial(filterState.serial)

        if(FILTERS.SET_SCOTIA_ID === filterState.filterKey)
            await findDeviceByScotiaId(filterState.scotiaId)

        if(FILTERS.SET_IMAGE || FILTERS.SET_BUSINESS)
            await findDeviceByBusinessOrImage(filterState.business, filterState.image)
    }

    const removeAllListeners = async () => {
        await removeAllListenersIPC()
    }

    return (
        <Provider value={{
            removeAllListeners, getDevices, setDevice, findDeviceBySerial,
            updateDevice, deleteDevice, findDeviceByBusinessOrImage,
            getDevice,
            setFindDevice, findDeviceByScotiaId, state
        }} >
            {children}
        </Provider>
    );
}

export const useBootCenterDevices = () => {
    const context = useContext(BootCenterDevicesContext);
    if (!context) throw new Error("Should rectify internet connection");
    return context;
};

BootCenterDevicesProvider.prototype = {
    children: PropTypes.element
}