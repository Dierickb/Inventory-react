import {createContext, useContext} from "react";
import {ipcAuthAPI} from '../api'
import PropTypes from "prop-types";

export const AuthContext = createContext();
const {Provider} = AuthContext;
const {login: ipLogin} = ipcAuthAPI()

export const AuthProvider = ({children}) => {
    
    const logout = async () => {
        try {
            localStorage.removeItem("auth")
            window.location.href = "/login";
        } catch (e) {
            throw e
        }
    }

    const isLoggedIn = () => {
        return {
            isLogged: !!localStorage.getItem("auth"),
            rol: JSON.parse(localStorage.getItem("auth")) && JSON.parse(localStorage.getItem("auth")).rol,
        }
    };

    const login = async (username, password) => {
        try {
            const {userEmail, uid, rol} = await ipLogin(username, password)            
            localStorage.setItem("auth", JSON.stringify({email: userEmail, uid: uid, rol: rol}))
            return true
        } catch (e) {
            throw e
        }
    }

    return <Provider value={{
        logout, login, isLoggedIn
    }}>{children}</Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) throw new Error("useAuth must be wrapped with AuthProvider")
    return context
}

AuthProvider.prototype = {
    children: PropTypes.element
}