import React from 'react';

import {
  Container,
  BioContainer,
  BioDescription,
  BioName,
  ButtomsContainer,
  HomeBtn,
} from './styles';
import Animated from '../../components/Circles';
import { Envelope, Download } from 'styled-icons/boxicons-solid';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <BioContainer>
        <BioName>Isaque Igor</BioName>
        <BioDescription>Full Stack Developer</BioDescription>
        <ButtomsContainer>
          <a
            style={{ color: 'inherit', textDecoration: 'none' }}
            href='mailto:isaqueigorsilva@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <HomeBtn>
              <Envelope size={20} color='var(--white)' />
              Contact Me
            </HomeBtn>
          </a>

          <Link
            style={{ textDecoration: 'none' }}
            to='/files/resumecv.pdf'
            target='_blank'
            download
          >
            <HomeBtn>
              <Download size={20} color='var(--white)' />
              Resume
            </HomeBtn>
          </Link>
        </ButtomsContainer>
      </BioContainer>
    </Container>
  );
};

export default Home;
