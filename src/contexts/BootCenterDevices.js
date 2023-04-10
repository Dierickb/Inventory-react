import {createContext, useContext, useReducer} from "react";
import {deviceInitialState, devicesReducer} from "../reducers/devices";
import {DEVICE_ACTIONS} from "../actions";
import {deviceAPI} from "../api"

export const BootCenterDevicesContext = createContext();
const {Provider} = BootCenterDevicesContext;
const {getDevices: apiGetDevices, getDeviceInfo: apiGetDeviceInfo, setDevice: apiSetDevice} = deviceAPI()

export const BootCenterDevicesProvider = ({children}) => {
    const [state, dispatch] = useReducer(devicesReducer, deviceInitialState)

    const getDevices = async () => {
        dispatch({
            type: DEVICE_ACTIONS.GET_DEVICES,
            payload: await apiGetDevices("F4y1CG4kfa80VivueVkL")
        })
    }

    const getDeviceInfo = async () => {
        return apiGetDeviceInfo()
    }

    const setDevice = async (brand, product, model, businesses, serial) => {
        await apiSetDevice(brand, product, model, businesses, serial)
    }

    const updateDevice = async () => {

    }
    const deleteDevice = async () => {

    }

    const getDevice = async () => {

    }

    const removeAllListeners = () => {
        return () => {
            //ipc.removeAllListeners()
        }
    }

    return (
        <Provider value={{
            removeAllListeners, getDevices, getDeviceInfo, setDevice, state
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