import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HM;
  display: flex;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
  background: green;
`;

export const BioContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
`;
export const BioName = styled.h1`
  font-size: 56px;
  font-weight: bold;
  color: #fff;
`;
export const BioDescription = styled.h4`
  font-size: 26px;
  color: #fff;
  align-items: center;
`;

export const HireMeBtn = styled.button`
  border-radius: 16px;
`;
