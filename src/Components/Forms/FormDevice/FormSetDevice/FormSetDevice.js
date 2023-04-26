import {DropDown, InputsContainer, FormRegisters, Button} from "../../../layout";
import {handleSetFormDevice} from "./handles";
import FormDeviceSelect from "../common/FormDeviceSelect";
import {useBootCenterDevices} from "../../../../contexts";
import {TextArea} from "../../../layout/inputs";
import {memo} from "react";

const FormSetDevice = () => {
    const { setDevice } = useBootCenterDevices();
    const handleRegister = (e) => {
        const [brand, product, model, businesses, serial] = handleSetFormDevice(e)
        setDevice(brand, product, model, businesses, serial)
    }

    return (
        <FormRegisters onSubmit={handleRegister}>

            <FormDeviceSelect />

            <InputsContainer pd='5px'>
                <DropDown defaultValue="" name="businesses" required>
                    <option value="">Empresa</option>
                    <option value="GSG">GSG</option>
                    <option value="GBS">GBS</option>
                </DropDown>
            </InputsContainer>

            <InputsContainer pd='5px'>
                <DropDown defaultValue="" name="letOut" required>
                    <option value="">Salida</option>
                    <option value="out">Tiene salida</option>
                    <option value="withOut">No Tiene salida</option>
                </DropDown>
            </InputsContainer>

            <InputsContainer pd='5px'>
                <TextArea title="Serial" placeholder="Serial" name="brandModel"/>
            </InputsContainer>

            <InputsContainer className="begin">
                <Button>Submit</Button>
            </InputsContainer>

        </FormRegisters>
    )
}

export default memo(FormSetDevice)