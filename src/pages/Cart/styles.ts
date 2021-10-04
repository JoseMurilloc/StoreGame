import styled from "styled-components";

export const Container = styled.div`
  background: #0B0B0B;
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
    color: #FFFFFF;
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
    color: #BABABA;
  }
`;

export const BodyCartGame = styled.tr`
  div {
    &.card {
      display: flex; 
      margin-right: 6.75rem;
      margin-bottom: 1.375rem; 
      
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
          color: #B7B7B7;
        }
        
        span.description {
          text-align: left;
          margin-bottom: 0.25rem;
          width: 14.875rem;
          height: 45%;
          font-size: 0.625rem;
          color: #737373;
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
          color: #FFFFFF;
        }
        
      }
    }

    &.amount {
      margin-right: 6.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      color: #FFF;

      width: 11.9375rem;
      height: 3rem;

      button.button {
        display: flex;
        justify-content: center;
        align-items: center;

        border: none;

        width: 2.375rem;
        height: 1.9375rem;
        background: #AD0C07;
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
        color: #BABABA;
      } 
    }
  }
`;


export const ResumeRequest = styled.div`
  border-left: 0.0625rem solid rgba(186, 186, 186, 0.2);
  height: 11.6875rem;
  margin-left: 5.9375rem;
  padding-left: 1.625rem;

  display: flex;
  flex-direction: column;
  
  h2 {
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 1.75rem;
     color: #FFFFFF;
     margin-bottom: 1.375rem;
  }

  span.value-request {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #696969;
  }

  span.value-request + span.value-request {
    margin-top: 0.25rem;
  }

  span.shippingFree {
    color: #23CA7A;
  }

  span.total {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #BABABA;
    margin-top: 1rem;
    margin-bottom: 0.9375rem;
  }

  button.finally-buy {
    width: 11.375rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #AD0C07;
    border-radius: 0.25rem;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #FFFFFF;
  }
`; 

export const NotExistProductsInCart = styled.div`
  width: 53.5625rem;
  height: 9.3125rem;

  h2 {
    color: #999;
    margin-bottom: 0.75rem;  
  }

  a {
    color: #AD0C07;
    text-decoration: underline;
  }
`;