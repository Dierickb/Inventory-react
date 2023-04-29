import {DropDown, InputsContainer} from "../../layout";

const DropDownContainer = ({title, values, defaultValue, name}) => {
  return(
      <InputsContainer>
          <h4>{title}</h4>
          <DropDown defaultValue={defaultValue} name={name}>
              {values?.map(value => {
                  return <option key={value.value} value={value.value}>{value.optionValue}</option>
              })}
          </DropDown>
      </InputsContainer>
  )
}

export default DropDownContainer