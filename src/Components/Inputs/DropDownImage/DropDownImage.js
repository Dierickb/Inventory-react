import DropDownContainer from "../../Nav/DropDownContainer";
import {memo} from "react";

const DropDownImage = ({image}) => {

    const images = [
        {value: "", optionValue: "Imagen"},
        {value: "ScotiaTech", optionValue: "ScotiaTech"},
        {value: "AML", optionValue: "AML"},
    ]

  return (
      <DropDownContainer title="Image" key={image ? "image" : image }
                         values={images}
                         name="imageSelect"
                         defaultValue={image}
      />
  )
}

export default memo(DropDownImage)