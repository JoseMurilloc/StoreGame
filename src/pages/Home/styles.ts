import styled from "styled-components";
import storeGameImage from '../../assets/storeGameNew.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${storeGameImage}) no-repeat;
  background-size: cover;
  color: #FFF;
  padding: 1.375rem 3.5rem;
`;

export const BestGameToYou = styled.div`
  margin-top: 3.9375rem;

  span {
    color: #999;
    font-size: 0.9375rem;
    line-height: 1.1875rem;
    margin-bottom: 0.5rem;
  }
  h1 {
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 3.1875rem;
    color: #FFFFFF;
    margin-bottom: 0.4625rem;
  }
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1.375rem;
    width: 32.375rem;
    line-height: 2rem;
    font-weight: 400;
    color: #FFFFFF;
  }
  a {
    cursor: pointer;
    width: 11rem;
    height: 3.3125rem;    
    background: #AD0C07;
    border: none;
    border-radius: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.8125rem;
    line-height: 1.0625rem;
    color: #FFFFFF;
  }
`;