import {InputsContainer, FormRegisters, Button, Input} from "../../layout";
import {useEffect} from "react";
import PropTypes from "prop-types";

const FormUser = ({itemToSearch}) => {

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
                <Input title="Nombre" type="text" placeholder="Nombre" name="userName"/>
            </InputsContainer>

            <InputsContainer pd='0px 5px'>
                <Input title="ScotiaId" type="text" placeholder="ScotiaId" name="ScotiaId"/>
            </InputsContainer>

            <InputsContainer pd='0px 5px'>
                <Input title="NickName" type="text" placeholder="NickName" name="nickName"/>
            </InputsContainer>

            <InputsContainer pd='0px 5px'>
                <Input title="Password" type="password" placeholder="Password" name="Password"/>
            </InputsContainer>

            <InputsContainer className="second">
                <Button>Submit</Button>
            </InputsContainer>

        </FormRegisters>
    )
}

export default FormUser

FormUser.prototype = {
    itemToSearch: PropTypes.string,
}