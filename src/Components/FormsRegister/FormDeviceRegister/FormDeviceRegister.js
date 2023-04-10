import {DropDown, InputsContainer, FormRegisters, Button} from "../../layout";
import InputContainer from "../../Nav/InputContainer";
import {handleFormDeviceRegister} from "./handles";
import FormDeviceSelect from "./FormDeviceSelect";

const FormDeviceRegister = () => {

    return (
        <FormRegisters onSubmit={handleFormDeviceRegister}>

            <FormDeviceSelect />

            <InputsContainer pd='0px 5px'>
                <DropDown defaultValue="" name="businesses" required>
                    <option value="">Empresa</option>
                    <option value="GSG">GSG</option>
                    <option value="GBS">GBS</option>
                </DropDown>
            </InputsContainer>

            <InputContainer name="serial" pd='0px 5px' placeHolder='Serial'/>

            <InputsContainer>
                <Button>Submit</Button>
            </InputsContainer>

        </FormRegisters>
    )
}

export default FormDeviceRegister