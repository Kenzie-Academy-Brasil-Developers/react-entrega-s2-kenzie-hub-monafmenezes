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
        --gray-4: #121214;
        --gray-3: #212529;
        --gray-2: #343B41;
        --gray-1: #868e96;
        --gray-0: #F8F9FA;
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