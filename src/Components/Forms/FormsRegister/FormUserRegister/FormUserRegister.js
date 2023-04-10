import {InputsContainer, FormRegisters, Button, Input} from "../../../layout";

const FormUserRegister = () => {

    const handleDevice = (e) => {
        e.preventDefault()
        console.log("User Delete")
    }

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

            <InputsContainer>
                <Button>Submit</Button>
            </InputsContainer>

        </FormRegisters>
    )
}

export default FormUserRegister