import {Card} from "../layout";
import FormRegister from "./FormRegister";
import {useState} from "react";

const Register = () => {
    const [showFormRegister, setShowFormRegister] = useState(false)

    const handleToggleForm = () => {
        setShowFormRegister(!showFormRegister)
    }
  return (

    <Card pd="0">
        <div className="cardRegisterHeader" onClick={handleToggleForm}>
            <div>
                <div className="numbers"><h4>Registrar equipo</h4></div>
            </div>
            <div className="registerMenu"></div>
        </div>
        {showFormRegister && <FormRegister />}
    </Card>
  )
}

export default Register