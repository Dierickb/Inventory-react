import styled from 'styled-components'

export const Input = styled.input`
  width: ${ (props) =>  props?.wd ? props.wd : 'calc(100% - 20px)' };
  pointer-events: ${ (props) =>  props?.pointerEvents ? props.pointerEvents : '' };
  border-radius: 10px;
  padding: 7px 10px;
  background: #fff6f6;
  border: solid #e7c7c7;
`