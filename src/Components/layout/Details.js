import styled from 'styled-components'

export const Details = styled.div`
  position: relative;
  width: ${ (props) =>  props.wd ? props.wd : 'auto' };
  padding: ${ (props) =>  props.pd ? props.pd : 'padding: 0 20px 20px' };
  display: grid;
  grid-gap: 20px;
  height: 74vh;
  grid-template-columns: ${ (props) =>  props.grTempCol ? props.grTempCol : '2fr 1fr' };
`
