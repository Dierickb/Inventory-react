import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: ${ (props) => props.hg ? props.hg : '35px'};
  position: relative;
  padding: 2px 4px;
  color: ${ (props) => props.color ? props.color : 'black'};
  background: ${ (props) => props.background ? props.background : '#08ADBF'};
  border-radius: 2rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  font-size: initial;
  
  &:hover {
    background: green;
    color: whitesmoke;
    
  }
`
