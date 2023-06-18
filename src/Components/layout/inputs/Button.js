import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: ${ (props) => props.hg ? props.hg : '25px'};
  position: relative;
  padding: 2px 4px;
  background: ${ (props) => props.background ? props.background : '#088993'};
  border-radius: 5px;
  cursor: pointer;
  color: ${ (props) => {
    if(!!props?.color) return props.color
    if(!!props?.background) return "antiquewhite"
    if(props?.background === "#a1a1a1" ) return "antiquewhite"
    return "black"
  }};
  text-decoration: none;
  font-weight: bold;
  font-size: initial;
  
  &:hover {
    background: green;
    color: whitesmoke;
    
  }
`
