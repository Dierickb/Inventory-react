import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  padding: ${ (props) =>  props?.pd ? props.pd : '1.8vh 1.5vw 1.8vh 1.5vw' };
  margin: ${ (props) =>  props?.mg ? props.mg : 'none' };
  margin-top: ${ (props) =>  props?.mgTp ? props.mgTp : 'none' };
  margin-bottom: ${ (props) =>  props?.mgBtt ? props.mgBtt : 'none' };
  margin-left: ${ (props) =>  props?.mgLt ? props.mgLt : 'none' };
  margin-right: ${ (props) =>  props?.mgRg ? props.Rg : 'none' };
  height: ${ (props) =>  props?.hg ? props.hg : 'auto' };
  border-radius: ${ (props) =>  props?.borderRadius ? props.borderRadius : '15px 15px 15px 15px' };
  background-color: #fff;
  overflow-y: auto;
  box-shadow: ${ (props) =>  props?.boxShadow ? props.boxShadow : '2px 4px 4px 4px rgb(0 0 0 / 25%)' };
  height: ${(props) => props?.hg ? props.hg : "-webkit-fill-available"};
`

