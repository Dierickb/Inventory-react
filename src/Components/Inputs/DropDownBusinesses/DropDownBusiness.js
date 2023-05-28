import DropDownContainer from "../DropDownContainer";
import {memo} from "react";
import {inputsFilterDefaultValues} from "../../../utils/utilities";
import PropTypes from "prop-types";
import {DROP_DOWN_PROPTYPES} from "../../common/propTypes/DROP_DOWN_PROPTYPES";

const DropDownBusinesses = ({business, display, mgLeft, padding, mgLSelect, hgSelect, ...rest}) => {

    const businesses = [
        "GSG",
        "GBS",
    ]

  return (
      <DropDownContainer title="Empresa" key={!business ? "business" : business }
                         values={businesses}
                         name={inputsFilterDefaultValues.business}
                         defaultValue={business}
                         display={display}
                         mgLeft={mgLeft}
                         mgLSelect={mgLSelect}
                         padding={padding}
                         hgSelect={hgSelect}
                         {...rest}
      />
  )
}

export default memo(DropDownBusinesses)

DropDownBusinesses.prototype = PropTypes.shape(DROP_DOWN_PROPTYPES)