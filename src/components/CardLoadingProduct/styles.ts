import { shade } from "polished";
import styled, { keyframes } from "styled-components";

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 10.3125rem;
  background: ${({theme}) => shade(0.5, theme.colors.secondary)};
  border-radius: 0.1875rem;

  div.image-game {
    width: 100%;
    height: 7.8125rem;
    border-radius: 0.1875rem 0.1875rem 0rem 0rem;
    background: linear-gradient(110deg, #171717 8%, #0B0B0B 18%, #171717 33%);
    background-size: 200% 100%;
    animation: 1.5s ${shine} linear infinite;
  }
  
  div.content {
    display: flex;
    flex-direction: column;
    padding: 0.375rem 0.875rem 0.25rem 0.375rem;
    width: 100%;  
    
    span { 
      font-size: 0.6875rem;
      line-height: 0.75rem;
      background: linear-gradient(110deg, #171717 8%, #0B0B0B 18%, #171717 33%);
      border-radius: 5px;
      background-size: 200% 100%;
      animation: 1.5s ${shine} linear infinite;
    }
    
    span.name {
      margin-bottom: 0.1875rem;
      height: 18px;
    }
    
    span.price {
      width: 38px;
      height: 15px;
      font-weight: bold;
    }

  }
  button {
    background: linear-gradient(110deg, #171717 8%, #0B0B0B 18%, #171717 33%);
    background-size: 200% 100%;
    animation: 1.5s ${shine} linear infinite;
    height: 1.6875rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0rem 0rem 0.1875rem 0.1875rem;
    border: none;
    width: 100%;

    span {
      font-weight: bold;
      font-size: 0.625rem;
      line-height: 0.6875rem;
      color: ${props => props.theme.colors.title};
      width: 155px;
      height: 24px; 
    }
  }
`;
