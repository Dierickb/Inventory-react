import styled from 'styled-components'

export const CardFooter = styled.footer`
  position: relative;
  justify-content: space-between;
  align-items: center;
  color: #888888;
  padding: 0.5em;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  .form-group {
    display: flex;
    padding: 3px;
  }

  h5 {
    margin: 0;
    padding: 5px 0;
    display: flex;
  }

  p {
    margin: 0;
    width: 100%;
    padding: 0 3px;
    text-decoration: none;
  }

  input {
    height: 45px;
    width: 100%;
    margin-left: 0;
    border-radius: 30px;
    position: relative;
    padding: 5px 10px;
    background: #08ADBF;
    color: black;
    font-weight: bold;
    font-size: larger;
    cursor: pointer;
  }

  input:hover {
    background: #08CC12;
    border: 4px solid black;
  }

  &:before {
    content: '';
    position: absolute;
    width: 95%;
    margin-left: 2.5%;
    top: 0;
    left: 0;
    border-top: 1px solid #888888;
  }
`
