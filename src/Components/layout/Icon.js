import styled from 'styled-components'

export const Icon = styled.span`
  position: relative;
  display: block;
  height: 60px;
  line-height: 60px;
  text-align: ${ (props) => props.txtAlign ? props?.txtAlign : 'center'};
  white-space: nowrap;
  align-self: center;
  margin: ${ (props) => props.mg ? props?.mg : ''};
  min-width: ${ (props) => props.minWd ? props?.minWd : '60px'};
  
  img{
    color: antiquewhite;
    font-size: 20px;
    width: ${ (props) => props.imgWd ? props.imgWd : '35px'};
    vertical-align: middle;
    &.trash {
      font-size: 16px;
    }
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