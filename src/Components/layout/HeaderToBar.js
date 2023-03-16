import styled from 'styled-components'

export const HeaderToBar = styled.header`
  display: flex;
  transition: 0.9s;
  width: ${ (props) =>  props?.active ? 'calc(100% - 240px)' : 'calc(100% - 60px)' };
  background: #fff;
  height: 70px;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 900;
  box-shadow: aliceblue;
`