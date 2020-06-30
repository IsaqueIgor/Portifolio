import React from 'react';

import { Container, LogoImg } from './styles';
import Logoimg from '../../assets/Logooo.svg';

const Logo = () => {
  return (
    <Container>
      <LogoImg src={Logoimg} alt='Logo' />
    </Container>
  );
};

export default Logo;
