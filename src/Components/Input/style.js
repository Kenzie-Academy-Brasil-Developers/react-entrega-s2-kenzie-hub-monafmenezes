import styled, {css} from "styled-components"

export const Container = styled.div`
    text-align: left;
    width: 264px;
   
    
    div {
       
        p {
        font-size: 9px;
        margin-bottom: 10px;
        margin-top: 10px;
        }
        span {
            color: var(--negative);
        }
    }

    @media (min-width: 900px) {
        width: 329px;
    }
 
`
export const InputContainer = styled.section`
    background-color: var(--grey-2);
    
    height: 35px;
    border: 1px solid #F8F9FA;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: 0.5s;
    align-items: center;
    

    ${(props) => 
    props.isErrored && css`
        border-color: var(--negative);
    `}

    input{
        background: transparent;
        width:200px;
        border: 0;
        color: var(--grey-5);
        font-size: 12px;
    } 
    

    svg {
        width: 15px;
        height: 17px;

    }

    

`