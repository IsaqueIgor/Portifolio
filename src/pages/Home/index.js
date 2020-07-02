import React from 'react';

import {
  Container,
  BioContainer,
  BioDescription,
  BioName,
  ButtomsContainer,
  HomeBtn,
} from './styles';

import { User, Brain, Book } from 'styled-icons/boxicons-solid';

const Home = () => {
  return (
    <Container>
      <BioContainer>
        <BioName>Isaque Igor</BioName>
        <BioDescription>Full Stack Developer</BioDescription>
        <ButtomsContainer>
          <HomeBtn>
            <User size={16} color='#1C4342' />
            Hire Me
          </HomeBtn>

          <HomeBtn>
            <Book size={16} color='#1C4342' />
            Resume
          </HomeBtn>
        </ButtomsContainer>
      </BioContainer>
    </Container>
  );
};

export default Home;
