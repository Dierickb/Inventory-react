import Register from "../../Components/Register";
import Detail from "../../Components/Detail";
import {useActiveLeftBar} from "../../contexts/ActiveLeftBar";

const Home = () => {
    const {active} = useActiveLeftBar()
    return (
        <div className={`formContainer ${active ? 'active' : ''}`} id='mainContainer'>
            <Register />
            <Detail />
        </div>
    )
}

export default Home