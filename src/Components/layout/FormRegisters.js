import styled from 'styled-components'

export const FormRegisters = styled.form`
  grid-template-columns: ${ (props) =>  props?.grTempCol ? props.grTempCol : 'repeat(3, 1fr)' };
  grid-template-rows: repeat(4, 1fr)
  position: relative;
  padding: ${ (props) =>  props?.pd ? props.pd : '0 20px 20px 20px' };
  display: grid;
  align-items: center;
`
