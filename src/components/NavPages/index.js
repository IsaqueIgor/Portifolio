import React from 'react';

import { NavLink } from 'react-router-dom';
import {
  Container,
  IconContainter,
  HomeIcon,
  BookIcon,
  BrainIcon,
  UserIcon,
} from './styles';

const NavPages = () => {
  return (
    <Container>
      <IconContainter>
        <NavLink
          to='/'
          exact
          style={{ color: '#9f45a4' }}
          activeStyle={{ color: '#D6ABCC' }}
        >
          <HomeIcon />
        </NavLink>
      </IconContainter>

      <IconContainter>
        <NavLink
          to='/about'
          style={{ color: '#9f45a4' }}
          activeStyle={{ color: '#D6ABCC' }}
        >
          <UserIcon />
        </NavLink>
      </IconContainter>

      <IconContainter>
        <NavLink
          to='/skills'
          style={{ color: '#9f45a4' }}
          activeStyle={{ color: '#D6ABCC' }}
        >
          <BrainIcon />
        </NavLink>
      </IconContainter>

      <IconContainter>
        <NavLink
          to='/portifolio'
          style={{ color: '#9f45a4' }}
          activeStyle={{ color: '#D6ABCC' }}
        >
          <BookIcon />
        </NavLink>
      </IconContainter>
    </Container>
  );
};

export default NavPages;
