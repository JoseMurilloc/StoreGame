import { createGlobalStyle } from 'styled-components';

export const ResponsiveScalesLayout = createGlobalStyle`
   @media (max-width: 750px) {
    html {
      font-size: 70.5%;
    }
  }
  @media (min-width: 751px) {
    html {
      font-size: 75%;
    }
  }
  @media (min-width: 1191px) {
    html {
      font-size: 93.75%; 
    }
  } 

  @media (min-width: 1400px) {
    html {
      font-size: 100%;
    }
  }

`;
