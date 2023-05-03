import {createContext, useContext, useReducer} from "react";
import {deviceInitialState, devicesReducer} from "../reducers/devices";
import {DEVICE_ACTIONS} from "../actions";
import {deviceAPI} from "../api"
import {ipcDeviceAPI} from "../api/ipcDeviceAPI";
import {inputsFilterTextName} from "../utils/utilities";
import {FILTERS} from "../actions/filter";

export const BootCenterDevicesContext = createContext();
const {Provider} = BootCenterDevicesContext;
const {getDevicesAPI,
    getDeviceInfoAPI,
    setDeviceAPI,
    updateDeviceAPI,
    deleteDeviceAPI,
    findDeviceAPI,
    findDeviceByBusinessOrImageAPI,
} = ipcDeviceAPI()

export const BootCenterDevicesProvider = ({children}) => {
    const [state, dispatch] = useReducer(devicesReducer, deviceInitialState)

    const getDevices = async () => {
        dispatch({
            type: DEVICE_ACTIONS.GET_DEVICES,
            payload: {devices: getDevicesAPI()}
        })
    }

    const getDeviceInfo = async () => {
        return await getDeviceInfoAPI()
    }

    const setDevice = async (brand, product, model, businesses, serial) => {
        await setDeviceAPI(brand, product, model, businesses, serial)
    }

    const updateDevice = async () => {
        return await updateDeviceAPI()
    }
    const deleteDevice = async () => {
        return await deleteDeviceAPI()
    }

    const findDevice = (serial) => {
        return findDeviceAPI(serial)
        //return findDevice(serial)
    }

    const findDeviceByBusinessOrImage = (business, image) => {
        const devices = findDeviceByBusinessOrImageAPI(business, image)

        if(!devices) {
            dispatch({
                payload: {devices: devices}
            })
        }
        if(!!devices) {
            dispatch({
                type: DEVICE_ACTIONS.GET_DEVICES,
                payload: {devices: devices}
            })
        }
    }

    const setFindDevice = (filterState) => {
        if(FILTERS.CLEAR === filterState.filterKey) getDevices()
        if(FILTERS.SET_SERIAL === filterState.filterKey) {
            findDevice(filterState.serial)
        }
        if(FILTERS.SET_IMAGE || FILTERS.SET_BUSINESS) {
            findDeviceByBusinessOrImage(filterState.business, filterState.image)
        }
    }

    const removeAllListeners = () => {
        return () => {
            //ipc.removeAllListeners()
        }
    }

    return (
        <Provider value={{
            removeAllListeners, getDevices, getDeviceInfo, setDevice, findDevice,
            findDeviceByBusinessOrImage, setFindDevice, state
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