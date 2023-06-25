import {DropDown, InputsContainer} from "../../layout";
import PropTypes from "prop-types";
import {inputsFilterDefaultValues} from "../../../utils/utilities";
import {DROP_DOWN_PROPTYPES} from "../../common/propTypes/DROP_DOWN_PROPTYPES";

const DropDownContainer = ({title, values, defaultValue, name, ...rest}) => {

  return(
      <InputsContainer display={rest.display} pd={rest.padding} textAlign={rest.textAlign}>
          <h4>{title}</h4>
          <DropDown defaultValue={defaultValue} name={name} mgL={rest.mgLSelect} hg={rest.hgSelect}
                    pd={rest.pdSelector} wd={rest.wd}
            onChange={rest.onChange}
          >
              {
                  (name === inputsFilterDefaultValues.image || name === inputsFilterDefaultValues.business)
                      ? <option  key={name} value={name}> {title}</option>
                      : <option  key={name} value="">{title}</option>
              }
              {values?.map(value =>
                  <option key={value} value={value}>{value}</option>
              )}
          </DropDown>
      </InputsContainer>
  )
}

export default DropDownContainer

DropDownContainer.prototype = PropTypes.shape(DROP_DOWN_PROPTYPES)