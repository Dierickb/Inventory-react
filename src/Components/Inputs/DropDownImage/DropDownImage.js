import DropDownContainer from "../DropDownContainer";
import {memo, useEffect} from "react";
import {useOperations} from "../../../contexts/Operations";
import PropTypes from "prop-types";
import {string} from "yup";
import {inputsFilterDefaultValues} from "../../../utils/utilities";

const DropDownImage = ({image: defaultImage, display, mgLeft, padding, mgLSelect, hgSelect, ...rest}) => {

    const {state, getCustomerOperation} = useOperations()

    useEffect(() => {
        (async () => {
            await getCustomerOperation()
        })()
    }, [])

  return (
      <DropDownContainer title="Imagen" key={!defaultImage ? "image" : defaultImage }
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


DropDownImage.prototype = {
    image: PropTypes.string,
    display: string,
    mgLeft: string,
    padding: string,
    mgLSelect: string,
    hgSelect: string,
    rest: PropTypes.object,
}