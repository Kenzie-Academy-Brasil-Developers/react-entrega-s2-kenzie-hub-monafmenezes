import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const Imagem = styled.img `
    width: 101px;
    height: 14px;  
    margin-bottom: 19px;

    @media (min-width: 900px){
        width: 144.06px;
        height: 19px;
    }

`

export const Card = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 14px;
    width: 296px;
    height: 402px;
    background-color: var(--grey-3);
    box-shadow: 0px 3px 32px -8px rgba(0, 0, 0, 0.25);
    border-radius: 3px;

    h2 {
        font-weight: bold;
        font-size: 14px;
        color: var(--grey-0);
    }

    h5{
        font-family: Inter;
        font-weight: 600;
        font-size: 9px;
        color: var(--grey-1);
        margin-top: 15px;
    }

    @media (min-width: 900px) {
        width: 369px;
        height: 502px;
    }

` 



