import {createContext, useContext, useEffect, useReducer} from "react";
import {deviceInitialState, devicesReducer} from "../../reducers/devices";
import {DEVICE_ACTIONS} from "../../actions/device";
import {channels} from "../../channels/bootCenter/getDevicesBootCenter";

export const BootCenterDevicesContext = createContext();
const {Provider} = BootCenterDevicesContext;

const { ipcRenderer: ipc } = window.require('electron');

export const BootCenterDevicesProvider = ({children}) => {
    const [state, dispatch] = useReducer(devicesReducer, deviceInitialState)

    const getDevices = async () => {
        await dispatch({
            type: DEVICE_ACTIONS.GET_DEVICES,
            payload: await ipc.invoke(channels.GET_DEVICES)
        })
    }

    const setDevice = async ({brand, product, model, businesses, serial}) => {
        dispatch({
            type: DEVICE_ACTIONS.SET_DEVICE,
            payload: await ipc.invoke(
                channels.SET_DEVICE,
                { brand, product, model, businesses, serial }
            )
        })
    }
    const updateDevice = async () => {

    }
    const deleteDevice = async () => {

    }

    const getDevice = async () => {

    }

    const removeAllListeners = () => {
        return () => {
            ipc.removeAllListeners()
        }
    }

    return (
        <Provider value={{setDevice, removeAllListeners, getDevices, state}} >
            {children}
        </Provider>
    );
}


export const useBootCenterDevices = () => {
    const context = useContext(BootCenterDevicesContext);
    if (!context) throw new Error("Should rectify internet connection");
    return context;
};