import {auths} from "../utils/testData"

export const ipcAuthAPI = () => {
    const register = async (email, password, rol) => {
        try{
            const elements = Object.keys(auths).filter(element => element === email)
            if(elements.length > 0) throw new Error("User Already Exist")
            
            auths[email] = {
                email: email,
                password: password,
                rol: rol,
                uid: new Date()
            }

        } catch (e) {
            throw e;
        }
    }

    const login = async (email, password) => {
        try {
            const {email: userEmail, rol, uid, password: userPassword} = auths[email]
            if(`${password}` !== userPassword) throw new Error("Invalid Password")
            return {userEmail, uid, rol}
        } catch (e) {
            throw e
        }
    }

    return {register, login}
}