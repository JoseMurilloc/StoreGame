import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 1.375rem 3.5rem;

  div.content {
    padding: 0;
    margin: 0;
  }
`;

interface CartProps {
  countGames: number;
}

const notify = keyframes`
  from { 
    transform: scale(1) 
  }
  to { 
    transform: scale(1.09)
  }
`;
export const Cart = styled(Link) <CartProps>`
  margin-right: 1.75rem;
  position: relative;
  color: ${({ theme }) => theme.colors.title};
  font-size: 0.5831rem;

  ${(props) => props.countGames > 0 && css`
    &:after {
      animation: ${notify} .9s ease-out infinite alternate;
      content: '${props.countGames}';
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 2px;
      right: 0;
      width: 14px;
      height: 14px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 7px;
    }
  `}

`;
