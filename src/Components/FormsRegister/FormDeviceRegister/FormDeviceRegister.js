import {DropDown, InputsContainer, FormRegisters, Button} from "../../layout";
import InputContainer from "../../Nav/InputContainer";
import {useBrand} from "../../../contexts";
import {handleFormDeviceRegister} from "./handleFormDeviceRegister";
import useFetch from "./hooks/useFetch";

const FormDeviceRegister = () => {
    const {state} = useBrand()
    useFetch()

    return (
        <FormRegisters onSubmit={handleFormDeviceRegister}>
            <InputsContainer pd='0px 5px'>
                <DropDown defaultValue="" name="brand" required>
                    <option value="">Fabricante</option>
                    {state.brands?.map(brand=>
                        <option key={brand} value={brand}>{brand}</option>
                    )}
                </DropDown>
            </InputsContainer>

            <InputsContainer pd='0px 5px'>
                <DropDown defaultValue="" name="product" required>
                    <option value="">Product</option>
                    <option value="1">Laptop</option>
                    <option value="2">Desktop</option>
                </DropDown>
            </InputsContainer>

            <InputsContainer pd='0px 5px'>
                <DropDown defaultValue="" name="model" required>
                    <option value="">Model</option>
                    <option value="1">Lenovo</option>
                    <option value="2">Dell</option>
                </DropDown>
            </InputsContainer>

            <InputsContainer pd='0px 5px'>
                <DropDown defaultValue="" name="businesses" required>
                    <option value="">Empresa</option>
                    <option value="1">GSG</option>
                    <option value="2">GBS</option>
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