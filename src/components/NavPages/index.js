import React from 'react';

import { Home } from 'styled-icons/boxicons-solid';
import { Link } from 'react-router-dom';
import { Container, IconContainter } from './styles';

const NavPages = () => {
  return (
    <Container>
      <IconContainter>
        <Link to='/skills'>
          <Home size={26} color='#FFF' />
        </Link>
      </IconContainter>
    </Container>
  );
};

export default NavPages;
