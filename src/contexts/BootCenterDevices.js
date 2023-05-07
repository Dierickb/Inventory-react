import {createContext, useContext, useReducer} from "react";
import {deviceInitialState, devicesReducer} from "../reducers/devices";
import {DEVICE_ACTIONS} from "../actions";
import {ipcDeviceAPI} from "../api/ipcDeviceAPI";
import {FILTERS} from "../actions/filter";

export const BootCenterDevicesContext = createContext();
const {Provider} = BootCenterDevicesContext;
const {getDevicesAPI,
    setDeviceAPI,
    updateDeviceAPI,
    deleteDeviceAPI,
    findDeviceAPI,
    findDeviceByBusinessOrImageAPI,
    findDeviceByScotiaIdAPI,
} = ipcDeviceAPI()

export const BootCenterDevicesProvider = ({children}) => {
    const [state, dispatch] = useReducer(devicesReducer, deviceInitialState)

    const getDevices = async () => {
        dispatch({
            type: DEVICE_ACTIONS.GET_DEVICES,
            payload: {devices: getDevicesAPI()}
        })
    }

    const setDevice = async ({brand, product, model, business, serial, outAllowed}) => {
        await setDeviceAPI(
            {brand, product, model, business, serial, outAllowed}
        )
        await getDevices()
    }

    const updateDevice = async () => {
        return await updateDeviceAPI()
    }
    const deleteDevice = async () => {
        return await deleteDeviceAPI()
    }

    const findDeviceBySerial = (serial) => {
        dispatch({
            type: DEVICE_ACTIONS.GET_DEVICES,
            payload: {devices:
                (!serial) ? getDevicesAPI()
                    : findDeviceAPI(serial)
            }
        })
    }

    const findDeviceByScotiaId = (scotiaId) => {
        dispatch({
            type: DEVICE_ACTIONS.GET_DEVICES,
            payload: {devices:
                (!scotiaId) ? getDevicesAPI()
                    : findDeviceByScotiaIdAPI(scotiaId)
            }
        })
    }

    const findDeviceByBusinessOrImage = (business, image) => {
        dispatch({
            type: DEVICE_ACTIONS.GET_DEVICES,
            payload: {devices: findDeviceByBusinessOrImageAPI(business, image)}
        })
    }

    const setFindDevice = (filterState) => {
        if(FILTERS.CLEAR === filterState.filterKey) getDevices()
        if(FILTERS.SET_SERIAL === filterState.filterKey)
            findDeviceBySerial(filterState.serial)

        if(FILTERS.SET_SCOTIA_ID === filterState.filterKey)
            findDeviceByScotiaId(filterState.scotiaId)

        if(FILTERS.SET_IMAGE || FILTERS.SET_BUSINESS)
            findDeviceByBusinessOrImage(filterState.business, filterState.image)
    }

    const removeAllListeners = () => {
        return () => {
            //ipc.removeAllListeners()
        }
    }

    return (
        <Provider value={{
            removeAllListeners, getDevices, setDevice, findDeviceBySerial,
            findDeviceByBusinessOrImage, setFindDevice, findDeviceByScotiaId, state
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