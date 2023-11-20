import {InputsContainer, FormRegisters, Button, Input} from "../../../layout";
import {DropDown} from "../../../layout/inputs";
import {useHandleBrand} from "./hooks"

const FormSetBrand = () => {

    const {brands, handleBrand} = useHandleBrand()    

    return (
        <FormRegisters onSubmit={handleBrand} grTempCol="repeat(2, 1fr)">
            <InputsContainer pd='0px 5px'>
                <Input title="Fabricante" type="text" placeholder="Fabricante" name="newBrand"/>
            </InputsContainer>

            <InputsContainer pd='2px 5px'>
                <Input title="Producto" type="text" placeholder="Producto/s" name="newProduct"/>
            </InputsContainer>       

            <InputsContainer className="begin" gridColEnd="3">
                <Button>Submit</Button>
            </InputsContainer>

        </FormRegisters>
    )
}

export default FormSetBrand