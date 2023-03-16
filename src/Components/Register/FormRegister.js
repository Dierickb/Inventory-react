import {DropDown, InputsContainer, FormRegisters, Button} from "../layout";
import InputContainer from "../Nav/InputContainer";
//import {useBootCenterDevices} from "../contexts/BootCenterDevices";

const FormRegister = () => {
    //const {setDevice} = useBootCenterDevices();
    const handleDevice = (e) => {
        e.preventDefault()
        const [brand, product, model, businesses, serial] = e.target.elements

        if (brand?.value !== undefined && product?.value !== undefined &&
            model?.value !== undefined && businesses?.value !== undefined &&
            serial?.value !== "/[A-Za-z0-9]/"
        ) {
            /*
                setDevice({
                    brand: brand?.value,
                    product: product?.value,
                    model: model?.value,
                    businesses: businesses?.value,
                    serial: serial?.value
                })
                serial.value = ""
             */
            console.log("Dierick")
        }
    }

    return (
        <FormRegisters onSubmit={handleDevice}>
            <InputsContainer pd='0px 5px'>
                <DropDown defaultValue="" name="brand" required>
                    <option value="">Fabricante</option>
                    <option value="1">Lenovo</option>
                    <option value="2">Dell</option>
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

export default FormRegister