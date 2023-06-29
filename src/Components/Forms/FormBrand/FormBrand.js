import {InputsContainer, FormRegisters, Button, Input} from "../../layout";
import {DropDown} from "../../layout/inputs";
import PropTypes from "prop-types";

import {useGetBrands} from "./hooks"

const FormBrand = ({itemToSearch}) => {

    const {state: {brands}} = useGetBrands({itemToSearch})

    const handleDevice = (e) => {
        e.preventDefault()
        console.log("User UserSettings")
    }

    return (
        <FormRegisters onSubmit={handleDevice}>
            <InputsContainer pd='0px 5px'>
                <Input title="Fabricante" type="text" placeholder="Fabricante" name="newBrand"/>
            </InputsContainer>

            <InputsContainer pd='0px 5px'>
                <DropDown>
                    {
                        brands.map(brand => <option key={brand}>{brand}</option>)
                    }
                </DropDown>
            </InputsContainer>            

            <InputsContainer className="begin">
                <Button>Submit</Button>
            </InputsContainer>

        </FormRegisters>
    )
}

export default FormBrand

FormBrand.prototype = {
    itemToSearch: PropTypes.string
}