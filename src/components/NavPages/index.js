import React from 'react';

import { Home, User, Brain, Book } from 'styled-icons/boxicons-solid';
import { Link } from 'react-router-dom';
import { Container, IconContainter } from './styles';

const NavPages = () => {
  return (
    <Container>
      <IconContainter>
        <Link to='/'>
          <Home size={26} color='var(--light-primary)' />
        </Link>
      </IconContainter>

      <IconContainter>
        <Link to='/about'>
          <User size={26} color='var(--light-primary)' />
        </Link>
      </IconContainter>

      <IconContainter>
        <Link to='/skills'>
          <Brain size={26} color='var(--light-primary)' />
        </Link>
      </IconContainter>

      <IconContainter>
        <Link to='/portifolio'>
          <Book size={26} color='var(--light-primary)' />
        </Link>
      </IconContainter>
    </Container>
  );
};

export default NavPages;
