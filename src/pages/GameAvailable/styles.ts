import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0B0B0B;
 
  .warnPriceFree {
    width: 100vw;
    background: #A62E2A;
    padding: 0.3125rem 0.3125rem;
    color: #FFFFFF;
    font-size: 0.75rem;
    line-height: 0.875rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div.content {
    padding: 0 56px;
    margin-top: 24px;
  }


  h1.title {
    font-size: 1rem;
    line-height: 1.25rem;
    color: #FFFFFF;
    margin-bottom: 22px;
  }
`;

export const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;  
  grid-gap: 0.93rem;
`;

