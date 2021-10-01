import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 135px;
  background: #262626;
  border-radius: 3px;
  
  div.content {
    display: flex;
    flex-direction: column;
    padding: 6px 14px 4px 6px;
    width: 100%;  
    
    span { 
      font-size: 11px;
      line-height: 12px;
    }
    
    span.name {
      margin-bottom: 3px;
      color: #FFFFFF;
    }
    span.price {
      color: #23CA7A;
      font-weight: bold;
    }

  }
  button {
    background: #AD0C07;
    height: 27px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0px 0px 3px 3px;
    border: none;
    width: 100%;

    span {
      font-weight: bold;
      font-size: 10px;
      line-height: 11px;
      color: #FFFFFF;
    }
  }
`;