import DropDownContainer from "../DropDownContainer/DropDownContainer";
import {memo} from "react";
import PropTypes from "prop-types";
import {DROP_DOWN_PROPTYPES} from "../../common/propTypes/DROP_DOWN_PROPTYPES";
import { useEffect } from "react";
import { useInternOperation } from "../../../contexts/InternOperation";
import {inputsFilterDefaultValues} from "../../../utils/utilities";

const DropDownInternOperation = ({title, internOperation, display, mgLeft, padding, mgLSelect, hgSelect, titleOnOff, ...rest}) => {

    const {state, getInternOperation} = useInternOperation()

    useEffect(() => {
        (async () => {
            await getInternOperation()
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
      <DropDownContainer title={title ? title : "Operacion Interna"} key={!internOperation ? "internOperation" : `${internOperation + rest?.serial + state?.internOperation?.length}` }
                        titleOnOff={titleOnOff} 
                        values={state?.internOperation}
                         name={inputsFilterDefaultValues.STORAGE}
                         defaultValue={rest.storage ? rest.storage : inputsFilterDefaultValues.STORAGE}
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