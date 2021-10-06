import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  height: 100vh;
  width: 100vw;
`;

export const ContentCart = styled.div`
  padding: 1.25rem 3.5rem 0rem 3.5rem;
  h1.title {
    margin-bottom: 1.25rem;
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 1.75rem;
    color: ${props => props.theme.colors.title};
  }

  .wrapper-content {
    display: flex;

    .wrapperScroll {
      width: auto;
      height: 31rem;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
`;

export const CartOfGames = styled.table`
`;

export const HeaderCartGame = styled.tr`

  th {
    text-align: left;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${({theme}) => theme.colors.subtext}
  }
`;

export const BodyCartGame = styled.tr`
  div {
    &.card {
      display: flex; 
      margin-right: 6.75rem;
      margin-bottom: 1.375rem;
      text-align: left;
      
      img {
        width: 6rem;
        height: 7.9rem; 
      }

      div.infoProduct {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        width: 100%;
        margin-left: 0.5rem;


        span.name {
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          font-weight: 500;
          font-size: 1rem;
          line-height: 1.1875rem;
          color: ${props => props.theme.colors.text};
        }
        
        span.description {
          text-align: left;
          margin-bottom: 0.25rem;
          width: 14.875rem;
          height: 47%;
          font-size: 0.7rem;
          font-weight: normal;
          color: ${props => props.theme.colors.text};
        }

        button {
          width: 7rem;
          height: 2.125rem;

          display: flex;
          justify-content: center;
          align-items: center;
          background: #111111;
          border-radius: 0.5rem;
          border: none;

          font-size: 0.75rem;
          line-height: 0.875rem;
          color: ${props => props.theme.colors.title};
        }
        
      }
    }

    &.amount {
      margin-right: 6.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      color: ${props => props.theme.colors.title};

      width: 11.9375rem;
      height: 3rem;

      button.button {
        display: flex;
        justify-content: center;
        align-items: center;

        border: none;

        width: 2.375rem;
        height: 1.9375rem;
        background: ${props => props.theme.colors.primary};
        border-radius: 0.2188rem;


        &:disabled {
          opacity: 0.4;
          cursor: unset;
        }
      }
    }

    &.price {
      width: 5.4375rem;
      text-align: left;
      span {
        font-size: 1rem;
        line-height: 1.1875rem;
        color: ${({theme}) => theme.colors.subtext}
      } 
    }
  }
`;


export const ResumeRequest = styled.div`
  border-left: 0.0625rem solid ${({theme}) => shade(0.6,theme.colors.text)};
  height: 11.6875rem;
  margin-left: 5.9375rem;
  padding-left: 1.625rem;

  display: flex;
  flex-direction: column;
  
  h2 {
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 1.75rem;
    color: ${props => props.theme.colors.title};
    margin-bottom: 1.375rem;
  }

  span.value-request {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${props => props.theme.colors.inactive};
  }

  span.value-request + span.value-request {
    margin-top: 0.25rem;
  }

  span.shippingFree {
    color: ${props => props.theme.colors.price};
  }

  span.total {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${({theme}) => theme.colors.subtext};
    margin-top: 1rem;
    margin-bottom: 0.9375rem;
  }

  button.finally-buy {
    width: 11.375rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    border-radius: 0.25rem;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${props => props.theme.colors.title};
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }
  }
`; 

export const NotExistProductsInCart = styled.div`
  width: 53.5625rem;
  height: 9.3125rem;

  h2 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 0.75rem;  
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`;