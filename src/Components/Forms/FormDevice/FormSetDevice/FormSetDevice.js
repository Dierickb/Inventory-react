import {FormRegisters} from "../../../layout";
import {handleSetFormDevice} from "../handles";
import {useBootCenterDevices} from "../../../../contexts";
import InputsFormSetDevice from "./InputsFormSetDevice";
import {useCallback} from "react";

import {ErrorMessageToUI} from "../../../../errors/errorsIpcDeviceAPI"

import {toast} from "react-toastify"

const FormSetDevice = () => {
    const { setDevice } = useBootCenterDevices();
    const handleRegister = useCallback((e) => {
        const {brand, product, model, business, outAllowed, serial} = handleSetFormDevice(e)
        setDevice({brand, product, model, business, serial, outAllowed})
        .then((result) => {
            if(result instanceof ErrorMessageToUI) {
                toast(result.message)
                return
            }
            toast(`Device ${result?.serial} added`)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <FormRegisters onSubmit={handleRegister}>

            <InputsFormSetDevice />

        </FormRegisters>
    )
}

export default FormSetDevice