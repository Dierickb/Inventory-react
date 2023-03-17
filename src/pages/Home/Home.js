import Register from "../../Components/Register";
import Detail from "../../Components/Detail";
import {useActiveLeftBar} from "../../contexts/ActiveLeftBar";

const Home = () => {
    const {isActive} = useActiveLeftBar()
    return (
        <div className={`formContainer ${isActive ? 'active' : ''}`} id='mainContainer'>
            <Register />
            <Detail />
        </div>
    )
}

export default Home