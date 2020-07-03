import React from 'react';

import {
  Container,
  SocialContainer,
  SocialIcon,
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
} from './styles';

import Circles from '../Circles';

const SocialIcons = () => {
  return (
    <Container>
      <SocialContainer>
        <SocialIcon
          target='_blank'
          href='https://www.linkedin.com/in/isaqueigor/'
        >
          <LinkedinIcon size={16} />
        </SocialIcon>

        <SocialIcon
          target='_blank'
          href='https://www.instagram.com/isaqueigor/'
        >
          <InstagramIcon size={16} />
        </SocialIcon>

        <SocialIcon target='_blank' href='https://github.com/IsaqueIgor'>
          <GithubIcon size={16} />
        </SocialIcon>
      </SocialContainer>
      <Circles />
    </Container>
  );
};

export default SocialIcons;
