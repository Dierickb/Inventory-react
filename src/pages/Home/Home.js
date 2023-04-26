import "./Home.scss"

import Detail from "../../Components/Detail";
import {useActiveLeftBar} from "../../contexts";
import FormDevice from "../../Components/Forms/FormDevice/FormSetDevice/FormSetDevice";
import CardContainer from "../../Components/Card/CardContainer";

const Home = () => {
    const {isActive} = useActiveLeftBar()
    return (
        <div className={`formContainer ${isActive ? 'active' : ''}`} id='mainContainer'>
            <CardContainer title="Registrar equipo" Children={FormDevice}/>
            <Detail />
        </div>
    )
}

export default Home