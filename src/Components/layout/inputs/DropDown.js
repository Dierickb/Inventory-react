import styled from 'styled-components'

export const DropDown = styled.select`
  height: ${ (props) =>  props?.hg ? props.hg : 'auto' };
  border-radius: 10px;
  padding: ${ (props) =>  props?.pd ? props.pd : '7px 10px' };
  width: ${ (props) =>  props?.wd ? props.wd : '100%' };
  border: solid #e7c7c7;
  background: #fff6f6;
  margin-left: ${ (props) =>  props?.mgL ? props.mgL : '' };
  cursor: pointer;
`