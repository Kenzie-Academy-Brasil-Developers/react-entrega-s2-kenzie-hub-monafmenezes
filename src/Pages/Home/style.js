import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const Navbar = styled.nav`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid var(--grey-3);
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 105px;
        height: 14px;
        margin-left: 15px;
    }

    button {
        font-size: 12px;
        margin-bottom: 15px;
        padding: 0 15px;
    }

    @media (min-width: 900px) {
        justify-content: space-evenly;
    }

`

export const Header = styled.div `
    width: 100%;
    height: 131px;
    border-bottom: 1px solid var(--grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 10px;
    }

    span {
        font-size: 12px;
       color: var(--grey-5);
    }

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-evenly;
    }

`

export const Main = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const ContainerModal = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;

    button {
        font-weight: bold;
        margin: 0;
        padding: 0 8px;
        margin-right: 15px;

    }



    h2 {
        font-weight: 600;
        font-size: 16px;
        color: var(--grey-0);
        margin-left: 15px;
    }

    @media (min-width: 900px) {
        justify-content: space-evenly;
        margin-top: 10px;
    }


`

export const Cards = styled.div `
    width: 296px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start  ;
    background-color: var(--grey-3);
   

    @media (min-width: 900px) {
        width: 779px;
        height: 300px;
    }
`