import DropDownContainer from "../DropDownContainer";
import {memo} from "react";
import PropTypes from "prop-types";
import {DROP_DOWN_PROPTYPES} from "../../common/propTypes/DROP_DOWN_PROPTYPES";

const DropDownInternOperation = ({internOperation, display, mgLeft, padding, mgLSelect, hgSelect, ...rest}) => {

    const internOperations = [
        "IT Delivery",
        "IT Support",
    ]

  return (
      <DropDownContainer title="Operacion Interna" key={internOperation ? "internOperation" : internOperation }
                         values={internOperations}
                         name="imageSelect"
                         defaultValue={internOperation}
                         display={display}
                         mgLeft={mgLeft}
                         mgLSelect={mgLSelect}
                         padding={padding}
                         hgSelect={hgSelect}
                         {...rest}
      />
  )
}

export default memo(DropDownInternOperation)

DropDownInternOperation.prototype = PropTypes.shape(DROP_DOWN_PROPTYPES)