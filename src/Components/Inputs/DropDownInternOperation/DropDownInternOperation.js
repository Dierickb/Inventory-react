import DropDownContainer from "../DropDownContainer";
import {memo} from "react";
import PropTypes from "prop-types";
import {DROP_DOWN_PROPTYPES} from "../../common/propTypes/DROP_DOWN_PROPTYPES";
import {inputsFilterDefaultValues} from "../../../utils/utilities";

const DropDownInternOperation = ({internOperation, display, mgLeft, padding, mgLSelect, hgSelect, ...rest}) => {

    const state = {
        internOperation: [
            "IT Delivery",
            "IT Support",
        ]
    }

  return (
      <DropDownContainer title="Operacion Interna" key={!internOperation ? "internOperation" : `${internOperation + state?.internOperation?.length}` }
                         values={internOperations}
                         name={inputsFilterDefaultValues.internOperation}
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