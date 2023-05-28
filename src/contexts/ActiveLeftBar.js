import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";

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
    if(!context) throw new Error("hooks must be wrapped with ActiveProider")
    return context
}

ActiveLeftBarProvider.prototype = {
    children: PropTypes.element
}