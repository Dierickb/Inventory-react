import styled from "styled-components";

export const TextArea = styled.textarea`
  width: ${ (props) =>  props?.wd ? props.wd : 'calc(100% - 25px)' };    
  border-radius: 10px;
  padding: 7px 10px;
  background: #fff6f6;
  border: solid #e7c7c7;
  vertical-align: middle;
  height: ${ (props) =>  props?.hg ? props.hg : '16px' };
  min-height: ${ (props) =>  props?.minHg ? props.minHg : '16px' };
  max-height: ${(props) =>  props?.maxHg ? props.maxHg : '64px' };
  resize: none;
  transition: border-color 150ms ease;
`

