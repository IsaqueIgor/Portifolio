import React from 'react';

import { Grid } from './styles';

import Social from '../Social';
import Logo from '../Logo';
import Home from '../../pages/Home';
import NavPages from '../NavPages';

const Layout = () => {
  return (
    <Grid>
      <Logo />
      <NavPages />
      <Social />
      <Home />
    </Grid>
  );
};

export default Layout;
