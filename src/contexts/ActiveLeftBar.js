import {createContext, useContext, useState} from "react";

export const ActiveLeftBarContext = createContext();
const {Provider} = ActiveLeftBarContext;

export const ActiveLeftBarProvider = ({children}) => {
    const [active, setActive] = useState(false)

    const activeLeftBar = () => {
        setActive(!active)
    }

    return <Provider value={{
        activeLeftBar, active, setActive
    }}>{children}</Provider>
}

export const useActiveLeftBar = () => {
    const context = useContext(ActiveLeftBarContext)
    if(!context) throw new Error("useAuth must be wrapped with ActiveProider")
    return context
}