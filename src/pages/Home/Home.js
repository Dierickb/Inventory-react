import "./Home.scss"

import Detail from "../../Components/Detail";
import {useActiveLeftBar} from "../../contexts";
import FormSetDevice from "../../Components/Forms/FormDevice/FormSetDevice/FormSetDevice";
import CardContainer from "../../Components/Card/CardContainer";

const Home = () => {
    const {isActive} = useActiveLeftBar()
    return (
        <div className={`formContainer ${isActive ? 'active' : ''}`} id='mainContainer'>
            <CardContainer title="Registrar equipo" Children={FormSetDevice}/>
            <Detail />
        </div>
    )
}

export default Home