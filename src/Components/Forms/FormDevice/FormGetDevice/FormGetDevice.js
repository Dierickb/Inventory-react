import {Button, DropDown, FormRegisters, Input, InputsContainer} from "../../../layout";
import FormDeviceSelect from "../common/FormDeviceSelect";
import {useFormGetDevice} from "./hooks/useFormGetDevice";
import {deviceSettingsKeysValues} from "../../../../utils/utilities";

const FormGetDevice = ({itemToSearch, keyValue}) => {

    const {defaultValue, handleRegister} = useFormGetDevice(itemToSearch, keyValue)

  return (
      <FormRegisters onSubmit={handleRegister}>

          <FormDeviceSelect defaultValue={defaultValue} itemToSearch={itemToSearch} keyValue={keyValue}
                            dropDownDisabled={keyValue === deviceSettingsKeysValues.DELETE_DEVICE} />

          <InputsContainer pd='0px 5px'>
              <DropDown key={defaultValue?.business} defaultValue={defaultValue?.business} name="business" required
                        disabled={keyValue === deviceSettingsKeysValues.DELETE_DEVICE}
              >
                  <option value="">Empresa</option>
                  <option value="GSG">GSG</option>
                  <option value="GBS">GBS</option>
              </DropDown>
          </InputsContainer>

          <InputsContainer pd='5px'>
              {keyValue === deviceSettingsKeysValues.REGISTER_DEVICE &&
                  <DropDown defaultValue="" name="letOut" required
                            disabled={keyValue === deviceSettingsKeysValues.DELETE_DEVICE}
                  >
                      <option value="">Salida</option>
                      <option value="out">Tiene salida</option>
                      <option value="withOut">No Tiene salida</option>
                  </DropDown>
              }
              {keyValue !== deviceSettingsKeysValues.REGISTER_DEVICE &&
                  <DropDown defaultValue="" name="letOut"
                            disabled={keyValue === deviceSettingsKeysValues.DELETE_DEVICE}
                  >
                      <option value="">Salida</option>
                      <option value="out">Tiene salida</option>
                      <option value="withOut">No Tiene salida</option>
                  </DropDown>
              }
          </InputsContainer>

          <InputsContainer pd='0px 5px'>
              <Input disabled={keyValue === deviceSettingsKeysValues.DELETE_DEVICE}
                  key={defaultValue?.serial} title="Serial" defaultValue={defaultValue?.serial} name="serial" />
          </InputsContainer>

          <InputsContainer className="begin">
              <Button>Submit</Button>
          </InputsContainer>

      </FormRegisters>
  )
}

export default FormGetDevice