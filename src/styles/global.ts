import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
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
