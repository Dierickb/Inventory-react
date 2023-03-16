import {createContext, useContext} from "react";
import {auth} from '../../api'

export const AuthContext = createContext();
const {Provider} = AuthContext;
const {login: loginApiAuth, logout: logoutApiAuth} = auth();

export const AuthProvider = ({children}) => {
    const logout = async () => {
        try {
            await logoutApiAuth()
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
            const [email, uid, rol] = await loginApiAuth(username, password)
            localStorage.setItem("auth", JSON.stringify({email: email, uid: uid, rol: rol}))
            return true
        } catch (e) {
            throw e
        }
    }

    return <Provider value={{
        logout, login, isLoggedIn }}>{children}</Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) throw new Error("useAuth must be wrapped with AuthProider")
    return context
}