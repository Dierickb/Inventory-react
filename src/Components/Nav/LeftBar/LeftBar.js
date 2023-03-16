import OperationList from "./OperationList";
import {useAuth} from "../../contexts/Auth";

const LeftBar = ({active}) => {
    const {logout} = useAuth()
    return (
        <div className={`navigation ${active ? 'active' :'' }`}>
            <ul>
                <OperationList title='Home' image='/icons/house-solid.svg' />
                <OperationList title='IT Delivery' image='/icons/user-plus-solid.svg' />
                <OperationList title='Exit' image='/icons/sign-out-alt-solid.svg' onClick={logout}/>
            </ul>
        </div>
    )
}

export default LeftBar