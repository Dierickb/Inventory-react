import "./InputContainer.scss"

import {Input} from "../../layout";
import {InputsContainer} from "../../layout";
import {memo} from "react";

const InputContainer = ({placeHolder, title, name, defaultValue, onKeyPress}) => {
  return (
      <InputsContainer>
          <h4>{title}</h4>
          <Input type="text" wd="calc(100% - 23.5px)" placeholder={placeHolder} name={name} defaultValue={defaultValue} onKeyPress={onKeyPress} required/>
      </InputsContainer>
  )
}

export default memo(InputContainer)