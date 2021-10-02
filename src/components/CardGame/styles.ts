import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 10.3125rem;
  background: #262626;
  border-radius: 0.1875rem;

  img.image-game {
    width: 100%;
    height: 125px;
    border-radius: 3px 3px 0px 0px; 
  }
  
  div.content {
    display: flex;
    flex-direction: column;
    padding: 0.375rem 0.875rem 0.25rem 0.375rem;
    width: 100%;  
    
    span { 
      font-size: 0.6875rem;
      line-height: 0.75rem;
    }
    
    span.name {
      margin-bottom: 0.1875rem;
      color: #FFFFFF;
    }
    span.price {
      color: #23CA7A;
      font-weight: bold;
    }

  }
  button {
    background: #AD0C07;
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
      color: #FFFFFF;
    }
  }
`;