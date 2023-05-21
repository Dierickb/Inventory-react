import DropDownContainer from "../../Nav/DropDownContainer";
import {memo, useEffect} from "react";
import {useOperations} from "../../../contexts/Operations";

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
                         name="imageSelect"
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