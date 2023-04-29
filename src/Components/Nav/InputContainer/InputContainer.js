import "./InputContainer.scss"

import {Input} from "../../layout";
import {InputsContainer} from "../../layout";
import {memo} from "react";

const InputContainer = ({placeHolder, title, name, defaultValue}) => {
  return (
      <InputsContainer>
          <h4>{title}</h4>
          <Input wd="calc(100% - 23.5px)" placeholder={placeHolder} name={name} defaultValue={defaultValue} required/>
      </InputsContainer>
  )
}

export default memo(InputContainer)