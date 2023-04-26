import {DropDown, InputsContainer} from "../../layout";

const DropDownContainer = ({title, values}) => {
  return(
      <InputsContainer>
          <h4>{title}</h4>
          <DropDown>
              {values?.map(value => {
                  return <option key={value.value} value={value.value}>{value.optionValue}</option>
              })}
          </DropDown>
      </InputsContainer>
  )
}

export default DropDownContainer