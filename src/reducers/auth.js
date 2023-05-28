import {AUTH_ACTIONS} from "../actions/auth";

export const initialState = {
    isLoggedIn: false,
    wrongPassword: true,
    wrongUsername: true,
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.SET_AUTH:
            return {
                isLoggedIn: true,
            }
        case AUTH_ACTIONS.LOGOUT:
            return initialState;
        default:
            return state;
    }
}