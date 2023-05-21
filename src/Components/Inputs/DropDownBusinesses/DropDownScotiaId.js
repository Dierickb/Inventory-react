import DropDownContainer from "../../Nav/DropDownContainer";
import {memo} from "react";
import {inputsFilterDefaultValues} from "../../../utils/utilities";

const DropDownBusinesses = ({business, display, mgLeft, padding, mgLSelect, hgSelect, ...rest}) => {

    const businesses = [
        "GSG",
        "GBS",
    ]

  return (
      <DropDownContainer title="Empresa" key={!business ? "business" : business }
                         values={businesses}
                         name="businessSelect"
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