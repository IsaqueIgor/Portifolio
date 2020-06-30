import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HM;
  display: flex;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
  background: var(--white);
`;

export const Wave = styled.div`
  background: url('../../assets/wave.svg') no-repeat 800px bottom;
`;
