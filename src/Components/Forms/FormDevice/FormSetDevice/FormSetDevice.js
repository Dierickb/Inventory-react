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

            <InputsContainer pd='0px 5px'>
                <DropDown defaultValue="" name="businesses" required>
                    <option value="">Empresa</option>
                    <option value="GSG">GSG</option>
                    <option value="GBS">GBS</option>
                </DropDown>
            </InputsContainer>

            <InputsContainer pd='0px 5px'>
                <TextArea title="Serial" placeholder="Serial" name="brandModel"/>
            </InputsContainer>

            <InputsContainer>
                <Button>Submit</Button>
            </InputsContainer>

        </FormRegisters>
    )
}

export default memo(FormSetDevice)