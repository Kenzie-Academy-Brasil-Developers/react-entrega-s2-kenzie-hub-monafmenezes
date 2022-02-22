import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868e96;
        --grey-0: #F8F9FA;
        --sucess: #3fe864;
        --negative: #e83f5b;
        
    }
    
    body, input, button {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        color: var(--gray-0)
    }
    body {
        background-color: var(--gray-4);
    }

    button {
        cursor: pointer;
    }

   a{
        text-decoration: none;
    } 

`

export const colorprimary         = '#FF577F';
export const colorprimaryfocus    = '#FF427F';
export const colorprimarynegative = '#59323F';
export const grey4                = '#121214';
export const grey3                = '#212529';
export const grey2                = '#343B41';
export const grey1                = '#868e96';
export const grey0                = '#F8F9FA';