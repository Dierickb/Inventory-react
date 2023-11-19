import "./Home.scss"

import Detail from "../../Components/Detail";
import {useActiveLeftBar} from "../../contexts";
import FormSetDevice from "../../Components/Forms/FormDevice/FormSetDevice/FormSetDevice";
import CardContainer from "../../Components/Card/CardContainer";
import { useState } from "react";

const Home = () => {
    const {isActive} = useActiveLeftBar()
    const [inputAcitve, setInputActive] = useState(false)
    return (
        <div className={`formContainer ${isActive ? 'active' : ''} ${inputAcitve ? 'inputAcitve' : ''}`} id='mainContainer'>
            <CardContainer title="Registrar equipo" Children={FormSetDevice} setInputActive={setInputActive} />
            <Detail />
        </div>
    )
}

export default Home