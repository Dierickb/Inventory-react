import {DropDown, InputsContainer} from "../../../../layout";

const DropDownModels = ({serial: defaultSerial, model: defaultModel, dropDownDisabled, modelsByBrand}) => {
  return (
      <InputsContainer pd='5px'>
          <DropDown key={defaultModel}  defaultValue={defaultModel}
                    disabled={dropDownDisabled}
                    name="model" required>
              {
                  (!!defaultModel && !!defaultSerial) &&
                  <option key={defaultModel} value={defaultModel}>{defaultModel}</option>
              }

              {
                modelsByBrand?.map(model => {
                    if(model !== defaultModel  && !!defaultSerial)
                        return <option key={model} value={model}>{model}</option>
                    if(!defaultModel) 
                        return <option key={model} value={model}>{model}</option>
                    return ""
                })
              }
          </DropDown>
      </InputsContainer>
  )
}

export default DropDownModels