import React from 'react';

import { Container, Title, IconContainter } from './styles';
import { Linkedin, Instagram, Github } from 'styled-icons/entypo-social';

const SkillCard = (props) => {
  return (
    <Container>
      <IconContainter>
        <Title>{props.title}</Title>
      </IconContainter>
      <IconContainter>
        <Github size={36} color='#FFF' />
        <Github size={36} color='#FFF' />
      </IconContainter>
    </Container>
  );
};

export default SkillCard;
