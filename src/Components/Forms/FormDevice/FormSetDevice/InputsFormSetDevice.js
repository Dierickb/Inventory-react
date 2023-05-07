import FormDeviceSelect from "../common/FormDeviceSelect";
import {Button, DropDown, InputsContainer} from "../../../layout";
import {TextArea} from "../../../layout/inputs";
import {memo} from "react";

const InputsFormSetDevice = () => {
  return (
      <>
          <FormDeviceSelect />

          <InputsContainer pd='5px'>
              <DropDown defaultValue="" name="businesses" required>
                  <option value="">Empresa</option>
                  <option value="GSG">GSG</option>
                  <option value="GBS">GBS</option>
              </DropDown>
          </InputsContainer>

          <InputsContainer pd='5px'>
              <DropDown defaultValue="" name="letOut" required>
                  <option value="">Salida</option>
                  <option value="out">Tiene salida</option>
                  <option value="withOut">No Tiene salida</option>
              </DropDown>
          </InputsContainer>

          <InputsContainer pd='5px'>
              <TextArea title="Serial" placeholder="Serial" name="brandModel"/>
          </InputsContainer>

          <InputsContainer className="begin">
              <Button>Submit</Button>
          </InputsContainer>
      </>
  )
}

export default memo(InputsFormSetDevice)