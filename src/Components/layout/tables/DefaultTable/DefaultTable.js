import styled from 'styled-components'

export const DefaultTable = styled.table`
    width: ${(props) => props?.wd ? props.wd : '100%'};;
    border-collapse: collapse;
    margin-top: ${(props) => props?.mgTop ? props.mgTop : '10px'};

    th{
        padding: 9px 5px;
        text-align: center;
    } 
    th:nth-child(1) {
        text-align: left;
    }
    th:last-child {
        text-align: right;
    }
    td {
        padding: 9px 5px;
        text-align: center;
    }

    tr {
        border-bottom: none;
    }
    tr:hover {
        background: #03a9f4;
        color: #fff;
    }
    thead{
        tr:hover {
            background: none;
            color: black;
        }
    }
    tbody {
        heigth: 70px;
    }
`
