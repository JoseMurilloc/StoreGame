import styled, { css } from "styled-components";

type ContainerProps = {
  isActive: boolean,
}

export const Container = styled.div<ContainerProps>` 
  width: 8.875rem;
  color: ${props => props.theme.colors.title};
  font-size: 0.75rem;
  padding: 0 0.3125rem;
  font-weight: bold;
  position: relative;  

  .dropdown {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    background: #121212;
    border: none;
    ${props => props.isActive ? css`
      border-radius: 0.625rem 0.625rem 0rem 0rem;   
    ` : css`
      border-radius: 0.625rem;
    `}
    span {
      margin-right: 0.625rem;
    }

  } 

  .wrapperOptions {
    position: absolute;    
    width: 8.25rem;
  }
  
  .dropdown-option {

    ${props => props.isActive ? css`` : css`
      visibility: hidden;
    `}

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 1.375rem;
    width: 100%;
    background-color: #121212;

    &:hover {
      background: #1E1E1E;
    }

    &:last-child {
      border-radius: 0rem 0rem 0.625rem 0.625rem;
    }
  }
`;