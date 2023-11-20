import { useRef, useState } from "react";
import {useAutosizeTextArea} from "./useAutoSizeTextArea"
import { TextArea } from "../../layout/inputs";

const TextAreaAutoSize = ({rest}) => {
    const [value, setValue] = useState("");
    const textAreaRef = useRef(null)

    useAutosizeTextArea(textAreaRef.current, value)

  const handleChange = (e) => {
    setValue(e.target?.value)
  };

  return (
    <TextArea
      onChange={handleChange}
      placeholder="Set Products"
      ref={textAreaRef}
      rows={1}
      value={value}
      rest={rest}
    />
  );
}

export default TextAreaAutoSize