import "./Home.scss"

import Detail from "../../Components/Detail";
import {useActiveLeftBar} from "../../contexts";
import FormDeviceRegister from "../../Components/FormsRegister/FormDeviceRegister/FormDeviceRegister";
import CardContainer from "../../Components/CardContainer";

const Home = () => {
    const {isActive} = useActiveLeftBar()
    return (
        <div className={`formContainer ${isActive ? 'active' : ''}`} id='mainContainer'>
            <CardContainer title="Registrar equipo" Children={FormDeviceRegister}/>
            <Detail />
        </div>
    )
}

export default Home