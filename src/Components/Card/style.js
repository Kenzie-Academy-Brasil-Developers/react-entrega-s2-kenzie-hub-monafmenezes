

import styled from "styled-components";
import {grey2, grey4} from '../../Styles/global'

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 279px;
    height: 100%;
    border-radius: 4px;
    border: none;
    margin: 10px 0px;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 0px;
    }

    @media (min-width: 900px) {
        width: 742px;
    }


`

export const List = styled.li ` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    width: 279px;
    height: 48px;
    background-color: ${(props) => (props.advancedSchema ? grey2 : grey4)};
    border-radius: 4px;
    border: none;
    margin: 10px;
    margin-top: 5px;

    @media (min-width: 900px) {
        width: 742px;
    }

    h2{
        font-family: Inter;
        font-weight: bold;
        font-size: 14px;
        margin: 0px 12px;
        color: var(--grey-0);
    }

    button {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 12.182px;
        color: var(--grey-1);
        border:none;
        background-color: var(--grey-4);
    }

`