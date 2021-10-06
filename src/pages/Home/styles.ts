import { shade } from "polished";
import styled from "styled-components";
import storeGameImage from '../../assets/storeGameNew.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${storeGameImage}) no-repeat;
  background-size: cover;
  color: ${({theme}) => theme.colors.title};
  padding: 1.375rem 3.5rem;
`;

export const BestGameToYou = styled.div`
  margin-top: 3.9375rem;

  span {
    color: ${({theme}) => theme.colors.inactive};
    font-size: 0.9375rem;
    line-height: 1.1875rem;
    margin-bottom: 0.5rem;
  }
  h1 {
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 3.1875rem;
    color: ${({theme}) => theme.colors.title};
    margin-bottom: 0.4625rem;
  }
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1.375rem;
    width: 32.375rem;
    line-height: 2rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.title};
  }
  a {
    cursor: pointer;
    width: 11rem;
    height: 3.3125rem;    
    background: ${({theme}) => theme.colors.primary};
    border: none;
    border-radius: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.8125rem;
    line-height: 1.0625rem;
    color: ${({theme}) => theme.colors.title};
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${({theme}) => shade(0.2,theme.colors.primary)};
    }
  }
`;