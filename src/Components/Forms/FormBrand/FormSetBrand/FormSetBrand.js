import {InputsContainer, FormRegisters, Button, Input} from "../../../layout";
import {DropDown} from "../../../layout/inputs";
import {useHandleBrand} from "./hooks"

const FormSetBrand = () => {

    const {handleBrand} = useHandleBrand()    

    return (
        <FormRegisters onSubmit={handleBrand} grTempCol="repeat(2, 1fr)">
            <InputsContainer pd='0px 5px'>
                <Input title="Fabricante" type="text" placeholder="Fabricante" name="newBrand"/>
            </InputsContainer>

            <InputsContainer gridColEnd="2">
                <Button hg="30px" >Submit</Button>
            </InputsContainer>

        </FormRegisters>
    )
}

export default FormSetBrand