import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: ${ (props) => props.hg ? props.hg : '25px'};
  position: relative;
  padding: 2px 4px;
  color: ${ (props) => props.color ? props.color : 'black'};
  background: ${ (props) => props.background ? props.background : '#088993'};
  border-radius: 2rem;
  cursor: pointer;
  color: ${ (props) => !!props?.background && "antiquewhite" };
  text-decoration: none;
  font-weight: bold;
  font-size: initial;
  
  &:hover {
    background: green;
    color: whitesmoke;
    
  }
`
