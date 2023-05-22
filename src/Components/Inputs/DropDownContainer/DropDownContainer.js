import {DropDown, InputsContainer} from "../../layout";
import PropTypes from "prop-types";
import {bool, number, string} from "yup";
import {inputsFilterDefaultValues} from "../../../utils/utilities";

const DropDownContainer = ({title, values, defaultValue, name, ...rest}) => {

  return(
      <InputsContainer display={rest.display} pd={rest.padding} textAlign={rest.textAlign}>
          <h4>{title}</h4>
          <DropDown defaultValue={defaultValue} name={name} mgL={rest.mgLSelect} hg={rest.hgSelect}
                    pd={rest.pdSelector}
            onChange={rest.onChange}
          >
              {
                  (name === inputsFilterDefaultValues.image || name === inputsFilterDefaultValues.business)
                      ? <option  key={name} value={name}> {title}</option>
                      : <option  key={name} value="">{title}</option>
              }
              {values?.map(value => {
                  return <option key={value} value={value}>{value}</option>
              })}
          </DropDown>
      </InputsContainer>
  )
}

export default DropDownContainer

DropDownContainer.prototype = {
    title: PropTypes.string,
    values: PropTypes.object,
    defaultValue: PropTypes.oneOf([bool, string, number]),
    name: PropTypes.string,
    rest: PropTypes.object,
}