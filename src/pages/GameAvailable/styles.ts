import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.background};

  
  .warnPriceFree {
    width: 100vw;
    background: ${props => props.theme.colors.attention};
    padding: 0.3125rem 0.3125rem;
    color: ${props => props.theme.colors.title};
    font-size: 0.75rem;
    line-height: 0.875rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div.content {
    padding: 0 3.5rem;
    margin-top: 1.5rem;
    animation: 0.7s ${FadeIn} ease-in;
  }
 
  div.header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  h1.title {
    font-size: 1rem;
    line-height: 1.25rem;
    color: ${props => props.theme.colors.title};
    margin-bottom: 1.375rem;
  }
`;

export const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 0.93rem;
  grid-column-gap: 1.5rem;

  @media(max-width: 1269px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 0.7rem;
    grid-column-gap: 1rem;
  }

  @media(max-width: 1134px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-row-gap: 0.8rem;
    grid-column-gap: 0.1rem;
  }
`;

