import styled from 'styled-components'

export const InputLoginForm = styled.input`
  width: ${ (props) =>  props?.wd ? props.wd : 'calc(100% - 16px)' };
  color: rgb(120, 96, 96);
  background-color: transparent;
  padding: 8px;
  border: none;
  border-bottom: 1px solid rgb(233, 157, 175);
  margin-bottom: ${ (props) =>  props?.mgBtt ? props.mgBtt : '' };
  font-size: ${ (props) =>  props?.fontSize ? props.fontSize : '' };
  
  &:focus {
    border-color: rgb(189, 50, 82);
    outline: 0;
  }
  &::placeholder {
    color: rgb(233, 157, 175);
  }
`