import styled from 'styled-components'

export const InputsContainer = styled.div`
  padding: ${ (props) => props.pd ? props.pd : '10px 5px'};
  display: ${ (props) => props.display ? props.display : ''};
  disabled: ${ (props) => props.disabled ? props.disabled : false};
  h4 {
    margin-top: 0;
    text-align: ${ (props) => props.textAlign ? props.textAlign : 'center'};
    font-size: 1rem;
    margin-bottom: 0;
    font-weight: bold;
    margin-left: ${ (props) => props?.mgLeft ? props.mgLeft : ''};
  }

  &.begin {
    grid-column-start: ${ (props) => props.gridColStart ? props.gridColStart : '1'};
    grid-column-end: ${ (props) => props.gridColEnd ? props.gridColEnd : '4'};
  }
  &.second {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`
