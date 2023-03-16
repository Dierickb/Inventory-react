import styled from 'styled-components'

export const CardHeader = styled.div`
  position: relative;
  padding: ${(props) => props?.pd ? props.pd : '0'};
  width: ${(props) => props?.wd ? props.wd : 'auto'};
  height: ${(props) => props?.hg ? props.hg : 'auto'};
  display: flex;
  align-items: center;
  background-color: white;
  overflow-y: auto;
  justify-content: space-between;
  
  .title {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    font-weight: bold;
    margin: 0;
    font-size: ${(props) => props?.fontSize ? props.fontSize : 'xx-large'};
  }
`
