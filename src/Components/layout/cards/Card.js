import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  padding: ${ (props) =>  props?.pd ? props.pd : '1.8vh 1.5vw 1.8vh 1.5vw' };
  margin: ${ (props) =>  props?.mg ? props.mg : '' };
  margin-top: ${ (props) =>  props?.mgTp ? props.mgTp : '' };
  margin-bottom: ${ (props) =>  props?.mgBtt ? props.mgBtt : '' };
  margin-left: ${ (props) =>  props?.mgLt ? props.mgLt : '' };
  margin-right: ${ (props) =>  props?.mgRg ? props.Rg : '' };
  height: ${ (props) =>  props?.hg ? props.hg : '' };
  border-radius: ${ (props) =>  props?.borderRadius ? props.borderRadius : '15px 15px 15px 15px' };
  background-color: #fff;
  overflow-y: auto;
  box-shadow: ${ (props) =>  props?.boxShadow ? props.boxShadow : '2px 4px 4px 4px rgb(0 0 0 / 25%)' };
  height: ${(props) => props?.hg ? props.hg : ""};
`

