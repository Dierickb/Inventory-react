import {createContext, useContext, useReducer} from "react";
import {deviceInitialState, devicesReducer} from "../reducers/devices";
import {DEVICE_ACTIONS, FILTERS} from "../actions";
import {ipcDeviceAPI} from "../api";
import PropTypes from "prop-types";
import {ErrorMessageToUI} from "../errors/errorsIpcDeviceAPI"

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
        if(!serial || serial?.length===0) return
        try {
            const value = await findDeviceAPI(serial)
            return value[0]
        } catch (e) {
            if(e instanceof ErrorMessageToUI) return e
        }
        
    }

    const setDevice = async ({brand, product, model, business, serial, outAllowed}) => {
        try {
            const device =  await setDeviceAPI(
                {brand, product, model, business, serial, outAllowed}
            )
            await getDevices()
            return device
        } catch(e) {
            if(e instanceof ErrorMessageToUI) return e
        }
        
    }

    const updateDevice = async ({brand, product, model, business, serial: newSerial,
                                    outAllowed, itemToSearch, image, ...rest}) => {
        try {
            return await updateDeviceAPI({brand, product, model,
                business, newSerial, outAllowed, itemToSearch, image, ...rest})
        } catch (e) {
            if(e instanceof ErrorMessageToUI) return e
        }  
    }

    const deleteDevice = async ({serial}) => {
        try {
            return await deleteDeviceAPI({serial})
        } catch (e) {
            if(e instanceof ErrorMessageToUI) return e
        }  
    }

    const findDeviceBySerial = async (serial) => {
        try {
            if(!serial) {
                dispatch({
                    type: DEVICE_ACTIONS.GET_DEVICES,
                    payload: { devices: await getDevicesAPI() }
                })
            }
            
            const value = await findDeviceAPI(serial)
            
            if(!!value || value?.length > 0) {
                dispatch({
                    type: DEVICE_ACTIONS.GET_DEVICES,
                    payload: { devices: value }
                })
            }
            
        } catch (e) {
            if(e instanceof ErrorMessageToUI) return e
        } 
        
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
        try {
            const devices = await findDeviceByBusinessOrImageAPI(business, image)
            dispatch({
                type: DEVICE_ACTIONS.GET_DEVICES,
                payload: {devices: devices}
            })
        } catch (e) {
            if(e instanceof ErrorMessageToUI) return e
        }  
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