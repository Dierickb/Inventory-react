import {Button, DropDown, FormRegisters, Input, InputsContainer} from "../../../layout";
import FormDeviceSelect from "../common/FormDeviceSelect";
import {memo, useEffect} from "react";
import {useBootCenterDevices} from "../../../../contexts";

const FormGetDevice = ({itemToSearch}) => {

    const { getDevice } = useBootCenterDevices();
    const [brand, product, model, businesses, serial] = getDevice(itemToSearch)

    useEffect(() => {
        console.log(itemToSearch)
    }, [itemToSearch])

  return (
      <FormRegisters >

          <FormDeviceSelect defaultValue={{brand: brand, product:product, model:model}} />

          <InputsContainer pd='0px 5px'>
              <DropDown defaultValue={businesses} name="businesses" required>
                  <option value="">Empresa</option>
                  <option value="GSG">GSG</option>
                  <option value="GBS">GBS</option>
              </DropDown>
          </InputsContainer>

          <InputsContainer pd='0px 5px'>
              <Input title="Serial" placeholder={!!serial ? serial : "Serial"} name="brandModel" />
          </InputsContainer>

          <InputsContainer>
              <Button>Submit</Button>
          </InputsContainer>

      </FormRegisters>
  )
}

export default memo(FormGetDevice)