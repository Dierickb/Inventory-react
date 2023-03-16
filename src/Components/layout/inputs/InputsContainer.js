import styled from 'styled-components'

export const InputsContainer = styled.div`
  padding: ${ (props) => props.pd ? props.pd : '10px 5px'};
  h4 {
    margin-top: 0;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 0;
    font-weight: bold;
  }
`
