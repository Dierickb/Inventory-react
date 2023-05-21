import {DropDown, InputsContainer} from "../../layout";

const DropDownContainer = ({title, values, defaultValue, name, ...rest}) => {

  return(
      <InputsContainer display={rest.display} pd={rest.padding} textAlign={rest.textAlign}>
          <h4>{title}</h4>
          <DropDown defaultValue={defaultValue} name={name} mgL={rest.mgLSelect} hg={rest.hgSelect} pd={rest.pdSelector}
            onChange={rest.onChange}
          >
              <option key={title}>{title}</option>
              {values?.map(value => {
                  return <option key={value} value={value}>{value}</option>
              })}
          </DropDown>
      </InputsContainer>
  )
}

export default DropDownContainer