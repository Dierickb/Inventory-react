import OperationList from "./OperationList";
import {useAuth} from "../../../contexts/Auth";
import {useHistory} from "react-router-dom";

const LeftBar = ({active}) => {
    const {logout, isLoggedIn} = useAuth()
    const {rol} = isLoggedIn();
    const history = useHistory();

    const handleClick = () => {
        console.log("diericks")
        history.push("/dashboard/setting");
    }

    return (
        <div className={`navigation ${active ? 'active' :'' }`}>
            <ul>
                <OperationList title='Home' image='/icons/house-solid.svg' />
                <OperationList title='IT Delivery' image='/icons/user-plus-solid.svg' />
                { (rol === "admin") &&
                    <OperationList title='Exit' image='/icons/gear-solid.svg' onClick={handleClick} />
                }
                <OperationList title='Exit' image='/icons/sign-out-alt-solid.svg' onClick={logout}/>

            </ul>
        </div>
    )
}

export default LeftBar