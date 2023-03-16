import styled from 'styled-components'

export const Icon = styled.span`
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: ${ (props) => props.txtAlign ? props?.txtAlign : 'center'};
  white-space: nowrap;
  align-self: center;
  
  img{
    color: antiquewhite;
    font-size: 24px;
    width: ${ (props) => props.imgWd ? props.imgWd : '35px'};
    vertical-align: middle;
  }
  
  &:hover {
    cursor: pointer;
    background: ${ (props) => props.bgImg ? '' : '#03a9f4'};
    img {
      background: ${ (props) => props.bgImg ? '#03a9f4' : ''};
      border-radius: ${ (props) => props.brdRadImg ? props.brdRadImg : ''};
    }
  }
  
`