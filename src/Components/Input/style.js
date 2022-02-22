import styled, {css} from "styled-components"

export const Container = styled.div`
    text-align: left;
    div {
        span {
            color: var(--negative);
        }
    }
`

export const InputContainer = styled.div`
    background-color: var(--grey-2);
    border: 1px solid #F8F9FA;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
    display: flex;
    transition: 0.5s;

    ${(props) => 
    props.isErrored && css`
        border-color: var(--negative);
    `}

    input{
        background: transparent;
        align-items: center;
        flex: 1;
        border: 0;
        color: var(--grey-0);
    }


`