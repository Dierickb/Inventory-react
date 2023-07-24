import {InputsContainer, FormRegisters, Button, Input} from "../../../layout";
import {DropDown} from "../../../layout/inputs";
import {useHandleBrand} from "./hooks"

import FormBrandDropDown from "../common/FormBrandDropDown";

const FormSetBrand = () => {

    const {brands, handleBrand} = useHandleBrand()    

    return (
        <FormRegisters onSubmit={handleBrand} grTempCol="repeat(2, 1fr)">
            <InputsContainer pd='0px 5px'>
                <Input title="Fabricante" type="text" placeholder="Fabricante" name="newBrand"/>
            </InputsContainer>

            <InputsContainer pd='2px px'>
                <FormBrandDropDown key={brands?.length} showNewFirst={true} />
            </InputsContainer> 

            <InputsContainer pd='2px 5px'>
                <Input title="Producto" type="text" placeholder="Producto" name="newProduct"/>
            </InputsContainer>

            <InputsContainer pd='2px 5px'>
                hola
            </InputsContainer>  

            <InputsContainer pd='2px 5px'>
                <Input title="Modelo" type="text" placeholder="Modelo" name="newModel"/>
            </InputsContainer>

            <InputsContainer pd='2px 5px'>
                hola
            </InputsContainer>            

            <InputsContainer className="begin" gridColEnd="3">
                <Button>Submit</Button>
            </InputsContainer>

        </FormRegisters>
    )
}

export default FormSetBrand