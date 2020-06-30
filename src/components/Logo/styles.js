import styled from 'styled-components';

export const Container = styled.div`
  grid-area: NL;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--white);
  max-height: 100vh;
`;

export const LogoImg = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
