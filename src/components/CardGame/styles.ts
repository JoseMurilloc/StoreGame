import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 10.3125rem;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 0.1875rem;

  .container-image {
    width: 100%;
    height: 7.8125rem;
  }

  img.image-game {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.1875rem 0.1875rem 0rem 0rem;
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
      color: ${(props) => props.theme.colors.title};
    }
    span.price {
      color: ${(props) => props.theme.colors.price};
      font-weight: bold;
    }
  }
  button {
    background: ${(props) => props.theme.colors.primary};
    height: 1.6875rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0rem 0rem 0.1875rem 0.1875rem;
    border: none;
    width: 100%;
    transition: background 0.2s ease-in-out;

    span {
      font-weight: bold;
      font-size: 0.625rem;
      line-height: 0.6875rem;
      color: ${(props) => props.theme.colors.title};
    }

    img.addCart {
      width: 1.25rem;
      height: 1.25rem;
    }

    &:disabled {
      background: ${({ theme }) => shade(0.2, theme.colors.primary)};
      cursor: unset;
    }

    &:hover {
      background: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }
  }
`;

const spinning = keyframes`
  0%{ transform:translate(0deg);}
  50%{tranform:rotate(90deg);}
  100%{transform:rotate(180deg);}
`;

export const Loader = styled.div`
  height: 0.9375rem;
  width: 0.9375rem;
  background-color: transparent;
  border: 0.1875rem solid;
  border-color: ${({ theme }) => theme.colors.subtext}
    ${({ theme }) => theme.colors.title};
  border-radius: 50%;
  animation: 0.4s ${spinning} linear infinite;
  margin-right: 0.34rem;
`;
