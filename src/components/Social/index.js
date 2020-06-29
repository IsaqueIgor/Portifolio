import React from 'react';
import { Linkedin, Instagram, Github } from 'styled-icons/entypo-social';

import { Container, SocialContainer, SocialIcon } from './styles';

const SocialIcons = () => {
  return (
    <Container>
      <SocialContainer>
        <SocialIcon
          target='_blank'
          href='https://www.linkedin.com/in/isaqueigor/'
        >
          <Linkedin size={16} color='#FFF' />
        </SocialIcon>

        <SocialIcon
          target='_blank'
          href='https://www.instagram.com/isaqueigor/'
        >
          <Instagram size={16} color='#FFF' />
        </SocialIcon>

        <SocialIcon target='_blank' href='https://github.com/IsaqueIgor'>
          <Github size={16} color='#FFF' />
        </SocialIcon>
      </SocialContainer>
    </Container>
  );
};

export default SocialIcons;
