import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  background: ${({theme}) => theme.colors.secondary};
  padding: 1.375rem 3.5rem;

  div.content {
    padding: 0;
    margin: 0;
  }
`;


interface CartProps {
  countGames: number;
}

export const Cart = styled(Link)<CartProps>`
  margin-right: 1.75rem;
  position: relative;
  color: ${({theme}) => theme.colors.title};
  font-size: 0.5831rem;

  ${props => props.countGames > 0 && css`
    &:after {
      content: '${props.countGames}';
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 2px;
      right: 0;
      width: 14px;
      height: 14px;
      background: ${props => props.theme.colors.primary};
      border-radius: 7px;
    }
  `}

`;