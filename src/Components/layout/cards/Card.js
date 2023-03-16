import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  padding: ${ (props) =>  props?.pd ? props.pd : '2.7vh 1.5vw 2.7vh 1.5vw' };  
  width: ${ (props) =>  props?.wd ? props.wd : 'auto' };
  height: ${ (props) =>  props?.hg ? props.hg : 'auto' };
  border-radius: 15px 15px 15px 15px;
  background-color: #fff;
  overflow-y: auto;
  box-shadow: 2px 4px 4px 4px rgb(0 0 0 / 25%);
`

