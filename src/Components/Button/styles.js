import styled from "styled-components";

export const Container = styled.button`
    background-color: ${(props) => props.color};
    color: var(--grey-0);
    height: 38px;
    width: ${(props) => props.whidtMobile};
    padding: 0px 22px;
    border: 1px solid ${(props) => props.color};
    box-sizing: border-box;
    border-radius: 4px;
    margin: 0px 22px;
    transition: 0.5s;
    :hover{
        border: 1.5px solid ${(props) => props.colorHover};
        background-color: ${(props) => props.colorHover};
    }

    @media (min-width: 900px){
        height: 48px;
        width: ${(props) => props.whidtDesktop};
    }
`