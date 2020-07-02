import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HM;
  display: flex;
  max-height: 100vh;
  align-items: center;
  justify-content: flex-start;
  margin-left: 86px;
`;

export const BioContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
`;
export const BioName = styled.h1`
  font-size: 56px;
  color: var(--white);
`;
export const BioDescription = styled.h4`
  font-size: 26px;
  color: var(--white);
  align-items: center;
`;

export const HomeBtn = styled.button`
  border-radius: 14px;
  width: 120px;
  height: 40px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    transform: scale(1.08);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const ButtomsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  width: 250px;
  justify-content: space-between;
`;
