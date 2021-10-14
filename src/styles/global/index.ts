import {createGlobalStyle} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const GlobalStyles = createGlobalStyle`

  *::-webkit-scrollbar {
    width: 9px;
  }
  
  *::-webkit-scrollbar-track {
    background: #171717;
    border-radius: 5px;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #0b0b0b;
    border-radius: 20px;
    border: 2px solid #171717;
  }


  // 👋 CSS custom of lib [react-confirm-alert]
  .react-confirm-alert-overlay {
    background: rgba(0, 0, 0, 0.7);
    .react-confirm-alert-body {
      background: #171717;
      color: #fff;
  
      h1 {
        font-size: 25px;
        margin-bottom: 5px;
      }
  
      .react-confirm-alert-button-group{
        button {
          background: #AD0C07;
          font-weight: bold;
        }
      }
    }
  }

  @media (max-width: 750px) {
    html {
      font-size: 70.5%; // 11.28px
    }
  }
  @media (min-width: 751px) {
    html {
      font-size: 75%; // 12px
    }
  }
  @media (min-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  } 
  @media (min-width: 1400px) {
    html {
      font-size: 100%; // 16px
    }
  }

  @media (min-width: 1800px) {
    html {
      font-size: 120%; // 16px
    }
  }
  
  *, html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul, input, button {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
