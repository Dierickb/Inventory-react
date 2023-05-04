import "./LeftBar.scss"

import OperationList from "./OperationList";
import {useAuth} from "../../../contexts";
import {useHistory} from "react-router-dom";
import {HandleRedirects} from "./HandleRedirects";

import houseIcon from "./icons/house-solid.svg"
import userIcon from "./icons/user-plus-solid.svg"
import chartPieIcon from "./icons/chart-pie-solid.svg"
import gearIcon from "./icons/gear-solid.svg"
import exitIcon from "./icons/sign-out-alt-solid.svg"
import {memo} from "react";

const   LeftBar = ({isActive}) => {
    const {logout, isLoggedIn} = useAuth()
    const {rol} = isLoggedIn();
    const history = useHistory();

    const {
        handleRedirectToAdmin,
        handleRedirectToHome,
        handleRedirectToOperation,
        handleRedirectToGraph,
    } = HandleRedirects(history)

    return (
        <nav className={`navigation ${isActive ? 'active' :'' }`}>
            <ul>
                <OperationList title='Home' image={houseIcon} onClick={handleRedirectToHome} />
                <OperationList title='Operation' image={userIcon} onClick={handleRedirectToOperation} />
                { (rol === "admin") &&
                    <>
                        <OperationList title='Graphs' image={chartPieIcon} onClick={handleRedirectToGraph} />
                        <OperationList title='Settings' image={gearIcon} onClick={handleRedirectToAdmin} />
                    </>
                }
                <OperationList title='Exit' image={exitIcon} onClick={logout}/>
            </ul>
        </nav>
    )
}

export default memo(LeftBar)