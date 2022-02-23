import styled from "styled-components";


export const Container = styled.div`
    width: 263px;
    height: 60px;
    p, span {
        font-family: 'Inter';
        font-size: 9px;
        margin-top: 3px;
    }
    
`

export const SelectOpition = styled.select`

        width:263px;
        height:35px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color:var(--grey-2);
        border: 1px solid var(--grey-0);
        color: var(--grey-5);
        margin-top: 5px;
        box-sizing: border-box;
        border-radius: 3px;

`

export const Status = styled.option`
    text-align: center;

`