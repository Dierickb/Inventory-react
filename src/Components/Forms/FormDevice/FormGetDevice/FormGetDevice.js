import {Button, DropDown, FormRegisters, Input, InputsContainer} from "../../../layout";
import FormDeviceSelect from "../common/FormDeviceSelect";
import {useEffect, useState} from "react";
import {useBootCenterDevices} from "../../../../contexts";
import {formDeviceSelectInitialState} from "../../../../reducers/formDeviceSelect";

const FormGetDevice = ({itemToSearch, keyValue}) => {

    const [defaultValue, setDefaultValue] = useState(formDeviceSelectInitialState)
    const { getDevice } = useBootCenterDevices();

    useEffect(() => {
        (async () => {
            setDefaultValue(await getDevice(itemToSearch))
        })()
    }, [itemToSearch])

  return (
      <FormRegisters >

          <FormDeviceSelect keyValue={keyValue} defaultValue={defaultValue} itemToSearch={itemToSearch} />

          <InputsContainer pd='0px 5px'>
              <DropDown key={defaultValue?.business} defaultValue={defaultValue?.business} name="business" required>
                  <option value="">Empresa</option>
                  <option value="GSG">GSG</option>
                  <option value="GBS">GBS</option>
              </DropDown>
          </InputsContainer>

          <InputsContainer pd='0px 5px'>
              <Input title="Serial" placeholder={defaultValue?.serial} name="brandModel" />
          </InputsContainer>

          <InputsContainer pd='5px'>
              <DropDown defaultValue="" name="letOut" required>
                  <option value="">Salida</option>
                  <option value="out">Tiene salida</option>
                  <option value="withOut">No Tiene salida</option>
              </DropDown>
          </InputsContainer>

          <InputsContainer className="begin">
              <Button>Submit</Button>
          </InputsContainer>

      </FormRegisters>
  )
}

export default FormGetDevice