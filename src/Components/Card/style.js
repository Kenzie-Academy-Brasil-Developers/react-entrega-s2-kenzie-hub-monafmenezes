

import styled from "styled-components";
import {grey2, grey4} from '../../Styles/global'

export const Container = styled.div`
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
    margin: 16px 0px;

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

    span {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 12.182px;
        color: var(--grey-1);
    }

`