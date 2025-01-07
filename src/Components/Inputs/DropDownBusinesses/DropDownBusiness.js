import DropDownContainer from "../DropDownContainer/DropDownContainer";
import {memo} from "react";
import {inputsFilterDefaultValues} from "../../../utils/utilities";
import PropTypes from "prop-types";
import {DROP_DOWN_PROPTYPES} from "../../common/propTypes/DROP_DOWN_PROPTYPES";
import { useBusiness } from "../../../contexts/Business";
import { useEffect } from "react";

const DropDownBusinesses = ({business, display, mgLeft, padding, mgLSelect, hgSelect, ...rest}) => {

    const {state, getBusiness} = useBusiness()
    
    useEffect(() => {
        (async () => {
            await getBusiness()
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
      <DropDownContainer title="Empresa" key={!business ? "business" : business }
                         values={state.business}
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