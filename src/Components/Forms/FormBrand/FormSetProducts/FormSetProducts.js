import {InputsContainer, FormRegisters, Button, Input} from "../../../layout";
import TextAreaAutoSize from "../../../Inputs/TextAreaAutoSize"
import {useHandleSetProducts} from "./hooks"

const FormSetProducts = ({itemToSearch}) => {
    const {handleSetProduct} = useHandleSetProducts()
    return (
        <FormRegisters onSubmit={e => handleSetProduct(e)}>
            <InputsContainer pd='0px 5px'>
                <Input title="Fabricante" type="text" value={itemToSearch} name="newBrand" disabled />
            </InputsContainer> 

            <InputsContainer pd='0px 5px'>
                <TextAreaAutoSize title="Producto" type="text" name="newProduct" />
            </InputsContainer>          

            <InputsContainer>
                <Button formAction="submit" hg="30px">Submit</Button>
            </InputsContainer>

        </FormRegisters>
    )
}

export default FormSetProducts