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
import { Link } from 'react-router-dom';

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

          <Link to='/files/resumecv.pdf' target='_blank' download>
            <HomeBtn>
              <Book size={16} color='#1C4342' />
              Resume
            </HomeBtn>
          </Link>
        </ButtomsContainer>
      </BioContainer>
    </Container>
  );
};

export default Home;
