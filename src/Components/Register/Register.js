import {Card} from "../layout";
import FormRegister from "./FormRegister";
import {memo, useState} from "react";

const Register = memo( () => {
    const [hasFormRegister, setHasFormRegister] = useState(false)

    const handleToggleForm = () => {
        setHasFormRegister(!hasFormRegister)
    }
  return (

    <Card pd="0">
        <div className="cardRegisterHeader" onClick={handleToggleForm}>
            <div>
                <div className="numbers"><h4>Registrar equipo</h4></div>
            </div>
            <div className="registerMenu"></div>
        </div>
        {hasFormRegister && <FormRegister />}
    </Card>
  )
})

export default Register