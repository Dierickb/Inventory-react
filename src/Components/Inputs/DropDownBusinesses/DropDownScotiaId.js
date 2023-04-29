import DropDownContainer from "../../Nav/DropDownContainer";
import {memo} from "react";

const DropDownBusinesses = ({business}) => {

    const businesses = [
        {value: "", optionValue: "Empresa"},
        {value: "GSG", optionValue: "GSG"},
        {value: "GBS", optionValue: "GBS"},
    ]

  return (
      <DropDownContainer title="Empresa" key={business ? "business" : business }
                         values={businesses}
                         name="businessSelect"
                         defaultValue={business}
      />
  )
}

export default memo(DropDownBusinesses)