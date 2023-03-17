import {createContext, useContext, useReducer} from "react";
import {deviceInitialState, devicesReducer} from "../reducers/devices";
import {DEVICE_ACTIONS} from "../actions/device";
import {device} from "../api"

export const BootCenterDevicesContext = createContext();
const {Provider} = BootCenterDevicesContext;
const {getDevices: apiGetDevices, getDeviceInfo: apiGetDeviceInfo} = device()

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

    /*
    const setDevice = async ({brand, product, model, businesses, serial}) => {
        dispatch({
            type: DEVICE_ACTIONS.SET_DEVICE,
            payload: await ipc.invoke(
                channels.SET_DEVICE,
                { brand, product, model, businesses, serial }
            )
        })
    }

     */
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
        <Provider value={{removeAllListeners, getDevices, getDeviceInfo, state}} >
            {children}
        </Provider>
    );
}


export const useBootCenterDevices = () => {
    const context = useContext(BootCenterDevicesContext);
    if (!context) throw new Error("Should rectify internet connection");
    return context;
};