import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-header: #c72828;
    --background-header-card: #ffb84d;
    --background-button: #39b100;
    --background-icon: #41c900;
    --background-card: #f0f0f5;
    --white: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (max-width: 1280px){
      font-size: 93.75%
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }
  
  body {
    background: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  }

  button { 
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-not-allowed;
  }

`