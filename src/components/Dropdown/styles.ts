import styled, { css } from "styled-components";

type ContainerProps = {
  isActive: boolean,
}

export const Container = styled.div<ContainerProps>` 
  width: 132px;
  color: #fff;
  font-size: 12px;
  padding: 0 5px;
  font-weight: bold;
  position: relative;  

  .dropdown {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #121212;
    border: none;
    ${props => props.isActive ? css`
      border-radius: 10px 10px 0px 0px;   
    ` : css`
      border-radius: 10px;
    `}
    span {
      margin-right: 10px;
    }

  } 

  .wrapperOptions {
    position: absolute;    
    width: 122px;
  }

  
  .dropdown-option {

    ${props => props.isActive ? css`` : css`
      visibility: hidden;
    `}

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 22px;
    width: 100%;
    background-color: #121212;

    &:hover {
      background: #1E1E1E;
    }

    &:last-child {
      border-radius: 0px 0px 10px 10px;
    }
  }
`;