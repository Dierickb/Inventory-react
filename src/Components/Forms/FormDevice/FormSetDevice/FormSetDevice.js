import {FormRegisters} from "../../../layout";
import {handleSetFormDevice} from "./handles";
import {useBootCenterDevices} from "../../../../contexts";
import InputsFormSetDevice from "./InputsFormSetDevice";
import {useCallback} from "react";

const FormSetDevice = () => {
    const { setDevice } = useBootCenterDevices();
    const handleRegister = useCallback((e) => {
        const {brand, product, model, business, outAllowed, serial} = handleSetFormDevice(e)
        setDevice({brand, product, model, business, serial, outAllowed})
    },[])

    return (
        <FormRegisters onSubmit={handleRegister}>

            <InputsFormSetDevice />

        </FormRegisters>
    )
}

export default FormSetDevice