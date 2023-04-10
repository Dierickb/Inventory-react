import "./InputContainer.scss"

import {Input} from "../../layout";
import {InputsContainer} from "../../layout";

const InputContainer = ({placeHolder, title, name, require}) => {
  return (
      <InputsContainer>
          <h4>{title}</h4>
          <Input wd="calc(100% - 23.5px)" placeholder={placeHolder} name={name} required/>
      </InputsContainer>
  )
}

export default InputContainer