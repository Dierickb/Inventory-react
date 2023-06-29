import {InputsContainer, FormRegisters, Button, Input} from "../../../layout";
import {DropDown} from "../../../layout/inputs";
import {useHandleBrand} from "./hooks"

const FormUpdateBrand = () => {
    const {brands, handleBrand} = useHandleBrand()    

    return (
        <FormRegisters onSubmit={handleBrand}>
            <InputsContainer pd='0px 5px'>
                <Input title="Fabricante" type="text" placeholder="Fabricante" name="newBrand"/>
            </InputsContainer>

            <InputsContainer pd='0px 5px'>
                <DropDown key={brands?.length} name="brands">
                    {
                        brands?.map(brand => <option key={brand}>{brand}</option>)
                    }                    
                    
                </DropDown>
            </InputsContainer>            

            <InputsContainer className="begin">
                <Button>Submit</Button>
            </InputsContainer>

        </FormRegisters>
    )
}

export default FormUpdateBrand