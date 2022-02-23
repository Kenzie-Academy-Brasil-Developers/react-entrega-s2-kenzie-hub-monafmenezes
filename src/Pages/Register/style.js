import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    button{
        font-size: 12px;
    }

  
`

export const Content = styled.div`
    width: 320px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 900px){
        width: 369px;
        
    }
`

export const Imagem = styled.img `
    width: 97px;
    height: 13px;  
    margin-left: 20px;
    margin-top: 15px;
    

    @media (min-width: 900px){
        width: 144.06px;
        height: 19px;
        margin-left: 0;
    
    }

`

export const Card = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 8px;
    width: 296px;
    height: 500px;
    background-color: var(--grey-3);
    box-shadow: 0px 3px 32px -8px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    height: 432px;

    h2 {
        font-weight: bold;
        font-size: 14px;
        color: var(--grey-0);
    }

    span{
        font-family: 'Inter';
        font-weight: 600;
        font-size: 9px;
        color: var(--grey-1);
        margin-top: 8px;
    }

  

    button {
        margin-top: 7px;
        @media (min-width: 900px){
            margin-top: 15px;
        }
    }



    @media (min-width: 900px) {
        width: 369px;
        height: 502px;
    }

` 


