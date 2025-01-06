import styled from 'styled-components'

export const DropDown = styled.select`
  disabled: ${ (props) => props.disabled ? props.disabled : false};
  height: ${ (props) =>  props?.hg ? props.hg : 'auto' };
  border-radius: 10px;
  padding: ${ (props) =>  props?.pd ? props.pd : '7px 10px' };
  width: ${ (props) =>  props?.wd ? props.wd : '100%' };
  border: ${ (props) =>  props?.border ? props.border : 'solid #e7c7c7' };
  background: ${ (props) =>  props?.bg ? props.bg : '#fff6f6' };
  margin-left: ${ (props) =>  props?.mgL ? props.mgL : '' };
  cursor: pointer;
`