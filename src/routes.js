import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Skills from './pages/Skills';

import Social from './components/Social';
import Logo from './components/Logo';
import NavPages from './components/NavPages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Logo />
      <NavPages />
      <Social />
      <Route component={Home} path='/' exact />
      <Route component={Skills} path='/skills' />
    </BrowserRouter>
  );
};

export default Routes;
