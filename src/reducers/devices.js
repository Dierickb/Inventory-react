import {DEVICE_ACTIONS} from "../actions";

export const deviceInitialState = {
    devices: {},
    loading: true,
    error: false,
}

export const devicesReducer = (state, action) => {
    switch (action.type) {
        case DEVICE_ACTIONS.GET_DEVICES: {
            let devicesArray = []
            if(!Array.isArray(action.payload)) {
                devicesArray.push(action.payload)
            }
            if(action.payload.length > 1) {
                devicesArray = action.payload
            }
            return {
                ...deviceInitialState,
                devices: devicesArray,
                loading: false,
            }
        }
        case DEVICE_ACTIONS.SET_DEVICE:
            return {
                ...deviceInitialState,
                devices: action.payload,
                loading: false,
            }
        case DEVICE_ACTIONS.UPDATE_DEVICE:
            return {
                ...deviceInitialState,
            };
        default:
            return state;
    }
}