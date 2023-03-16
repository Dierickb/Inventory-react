import {InputLoginForm} from "../../layout/inputs/InputLoginForm";

const InputsContainer = ({props}) => {
  return (
      <div>
          <label>{props.placeholder}</label>
          <InputLoginForm mgBtt={props.mgBtt}
                          placeholder={props.placeholder}
                          fontSize={props.fontSize}
                          name={props.name}
                          minLength={props.minLength}
                          maxLength={props.maxLength}
                          onChange={props.onChange}
                          error={props.error}
          />
          {props?.error && <span>{props.error}</span>}
          <i></i>
      </div>
  )
}

export default InputsContainer