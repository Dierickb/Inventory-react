import DropDownContainer from "../../Nav/DropDownContainer";
import {memo} from "react";
import {inputsFilterDefaultValues} from "../../../utils/utilities";

const DropDownImage = ({image, display, mgLeft, padding, mgLSelect, hgSelect, ...rest}) => {

    const images = [
        {value: inputsFilterDefaultValues.image, optionValue: "Imagen"},
        {value: "ScotiaTech", optionValue: "ScotiaTech"},
        {value: "AML", optionValue: "AML"},
        {value: "Finance", optionValue: "Finance"},
    ]

  return (
      <DropDownContainer title="Imagen" key={!image ? "image" : image }
                         values={images}
                         name="imageSelect"
                         defaultValue={image}
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