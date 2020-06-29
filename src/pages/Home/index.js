import React from 'react';

import {
  Container,
  BioContainer,
  BioDescription,
  BioName,
  HireMeBtn,
} from './styles';

const Home = () => {
  return (
    <Container>
      <BioContainer>
        <BioName>ISAQUE IGOR</BioName>
        <BioDescription>Software-Developer</BioDescription>
        <HireMeBtn>Hire Me</HireMeBtn>
      </BioContainer>
    </Container>
  );
};

export default Home;
