import {DEVICE_ACTIONS} from "../actions/device";

export const deviceInitialState = {
    devices: {},
    loading: true,
    error: false,
}

export const devicesReducer = (state, action) => {
    switch (action.type) {
        case DEVICE_ACTIONS.GET_DEVICES:
            return {
                ...deviceInitialState,
                devices: action.payload,
                loading: false,
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