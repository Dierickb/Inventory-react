import {createContext, useContext, useState} from "react";

export const ActiveLeftBarContext = createContext();
const {Provider} = ActiveLeftBarContext;

export const ActiveLeftBarProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false)

    const activeLeftBar = () => {
        setIsActive(!isActive)
    }

    return <Provider value={{
        activeLeftBar, isActive, setIsActive
    }}>{children}</Provider>
}

export const useActiveLeftBar = () => {
    const context = useContext(ActiveLeftBarContext)
    if(!context) throw new Error("useAuth must be wrapped with ActiveProider")
    return context
}