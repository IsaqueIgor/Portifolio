import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HM;
  display: flex;
  max-height: 100vh;
  align-items: center;
  overflow-y: scroll;
  flex-direction: column;
  justify-content: space-between;
`;
export const ExperienceTitle = styled.h1`
  font-size: 36px;
`;

export const TimelineContainer = styled.div`
  display: flex;
  margin-top: 86px;
  width: 90%;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 52px 20px 60px 20px;
`;

export const AboutDescription = styled.p`
  font-size: 18px;
  color: var(--white);
`;
