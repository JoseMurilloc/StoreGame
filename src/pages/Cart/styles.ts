import { lighten, shade } from 'polished';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
  width: 100vw;
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ContentCart = styled.div`
  padding: 1.25rem 3.5rem 0rem 3.5rem;

  animation: 0.7s ${FadeIn} ease-in;

  h1.title {
    margin-bottom: 1.25rem;
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 1.75rem;
    color: ${(props) => props.theme.colors.title};
  }

  .wrapper-content {
    display: flex;
    justify-content: space-between;
    padding-right: 5rem;

    @media (max-width: 411px) {
      flex-direction: column;
      justify-content: space-between;
      height: 80vh;
    }

    .wrapperScroll {
      width: auto;
      height: 31rem;
      overflow-x: hidden;
      overflow-y: auto;

      @media (max-width: 411px) {
        height: 39rem;
      }
    }
  }
`;

export const CartOfGames = styled.table`
  border-collapse: separate;
  border-spacing: 3.125rem 0;
`;

export const HeaderCartGame = styled.tr`
  td {
    text-align: left;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${({ theme }) => theme.colors.subtext};
    padding-bottom: 0.625rem;
  }
`;

export const BodyCartGame = styled.tr`


div {
    margin-right: 1rem;

    &.card {
      display: flex;
      margin-bottom: 1.375rem;
      text-align: left;

      .container-image {
        width: 10rem;
        height: 7.9rem;
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;

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
          color: ${(props) => props.theme.colors.text};
        }

        span.description {
          text-align: left;
          margin-bottom: 0.25rem;
          width: 14.875rem;
          height: 47%;
          font-size: 0.7rem;
          font-weight: normal;
          color: ${(props) => props.theme.colors.text};
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
          color: ${(props) => props.theme.colors.title};
          transition: 0.9s all ease-out;

          &:hover {
            background: ${(props) => shade(0.2, props.theme.colors.primary)};
          }
        }
      }
    }

    &.amount {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 6.1875rem;
      color: ${(props) => props.theme.colors.title};


      height: 3rem;

      button.button {
        display: flex;
        justify-content: center;
        align-items: center;

        border: none;


        width: 1.5rem;
        height: 1.5rem;

        background: ${(props) => props.theme.colors.primary};
        border-radius: 0.2188rem;
        transition: background 0.2s ease-in-out;

        img {
          width: 0.625rem;
        }

        &:hover:enabled {
          background: ${({ theme }) => shade(0.5, theme.colors.primary)};
        }

        &:disabled {
          opacity: 0.4;
          cursor: unset;
        }
      }
    }

    &.price {
      width: 6.2rem;
      text-align: left;
      
      span {
        font-size: 1rem;
        line-height: 1.1875rem;
        color: ${({ theme }) => theme.colors.text}
      } 
    }

    &.pricePartial {
      width: 6.2rem;
      text-align: left;
      
      span {
        font-size: 1rem;
        line-height: 1.1875rem;
        color: ${({ theme }) => theme.colors.price}
      } 
    }
  }
`;

export const ResumeRequest = styled.div`
  border-left: 0.0625rem solid ${({ theme }) => shade(0.6, theme.colors.text)};
  height: 11.6875rem;
  padding-left: 1.625rem;
  width: 18.125rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 411px) {
    border-top: 0.0625rem solid ${({ theme }) => shade(0.6, theme.colors.text)};
    border-left: none;
    padding-top: 1rem;
    margin: 0;
  }

  h2 {
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 1.75rem;
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 1.375rem;
  }

  span.value-request {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${(props) => props.theme.colors.inactive};
  }

  span.value-request + span.value-request {
    margin-top: 0.25rem;
  }

  span.shippingFree {
    color: ${(props) => props.theme.colors.price};
  }

  span.total {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${({ theme }) => theme.colors.subtext};
    margin-top: 1rem;
    margin-bottom: 0.9375rem;
  }

  button.finally-buy {
    min-width: 11.375rem;
    min-height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0.25rem;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${(props) => props.theme.colors.title};
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }
  }
`;

export const NotExistProductsInCart = styled.div`

  h2 {
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 0.75rem;  
  }

  a {
    color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
    text-decoration: underline;
  }
`;
