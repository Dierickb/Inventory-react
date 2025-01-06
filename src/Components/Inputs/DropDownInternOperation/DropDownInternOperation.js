import DropDownContainer from "../DropDownContainer/DropDownContainer";
import {memo} from "react";
import PropTypes from "prop-types";
import {DROP_DOWN_PROPTYPES} from "../../common/propTypes/DROP_DOWN_PROPTYPES";
import {inputsFilterDefaultValues} from "../../../utils/utilities";

const DropDownInternOperation = ({internOperation, display, mgLeft, padding, mgLSelect, hgSelect, titleOnOff, ...rest}) => {

    const state = {
        internOperation: [
            "Stock",
            "IT Delivery",
            "IT Support",
        ]
    }

  return (
      <DropDownContainer title="Operacion Interna" key={!internOperation ? "internOperation" : `${internOperation + rest?.serial + state?.internOperation?.length}` }
                        titleOnOff={titleOnOff} 
                        values={state?.internOperation}
                         name={inputsFilterDefaultValues.internOperation}
                         defaultValue={state?.internOperation[0]}
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