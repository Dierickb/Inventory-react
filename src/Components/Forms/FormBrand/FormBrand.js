import {InputsContainer, FormRegisters, Button, Input} from "../../layout";
import {TextArea} from "../../layout/inputs";
import {useEffect} from "react";
import PropTypes from "prop-types";

const FormBrand = ({itemToSearch}) => {

    const handleDevice = (e) => {
        e.preventDefault()
        console.log("User UserSettings")
    }

    useEffect(() => {
        console.log(itemToSearch)
    }, [itemToSearch])

    return (
        <FormRegisters onSubmit={handleDevice}>
            <InputsContainer pd='0px 5px'>
                <Input title="Fabricante" type="text" placeholder="Fabricante" name="newBrand"/>
            </InputsContainer>

            <InputsContainer pd='0px 5px'>
                <TextArea title="Modelo" placeholder="Modelo" name="brandModel"/>
            </InputsContainer>

            <InputsContainer>
                <Button>Submit</Button>
            </InputsContainer>

        </FormRegisters>
    )
}

export default FormBrand

FormBrand.prototype = {
    itemToSearch: PropTypes.string
}