import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    // PRIMARY PALETTE
    --color-primary: #73001a;
    --color-primary-Focus: #900020;
    --color-primary-Negative: #59323F;

    // GREY SCALE PALETTE
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;

    //FEEDBACK PALETTE
    --toastify-color-light: var(--grey-2);
    --toastify-icon-color-success:#3FE864;
    --toastify-color-progress-success: #3FE864;
    --toastify-text-color-light:var(--grey-0);
    --success: #3FE864;
    --error: #E83F5B;
  }

  body {
    background-color: var(--grey-4);
    color: var(--grey-1);
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  } 
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    border-radius: 30px;
  }
`