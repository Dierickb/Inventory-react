import DropDownContainer from "../DropDownContainer";
import {memo, useEffect} from "react";
import {useOperations} from "../../../contexts/Operations";
import PropTypes from "prop-types";
import {inputsFilterDefaultValues} from "../../../utils/utilities";
import {DROP_DOWN_PROPTYPES} from "../../common/propTypes/DROP_DOWN_PROPTYPES";

const DropDownImage = ({defaultImage, display, mgLeft, padding, mgLSelect, hgSelect, ...rest}) => {

    const {state, getCustomerOperation} = useOperations()

    useEffect(() => {
        (async () => {
            await getCustomerOperation()
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
      <DropDownContainer title={(rest?.contentTitle === "empty") ? " " : "Imagen"} key={!defaultImage ? "image" : `${defaultImage + state?.customerOperation?.length}` }
                         values={state?.customerOperation}
                         name={inputsFilterDefaultValues.image}
                         defaultValue={defaultImage}
                         display={display}
                         mgLeft={mgLeft}
                         mgLSelect={mgLSelect}
                         padding={padding}
                         hgSelect={hgSelect}
                         {...rest}
      />
  )
}

export default memo(DropDownImage)


DropDownImage.prototype = PropTypes.shape(DROP_DOWN_PROPTYPES)