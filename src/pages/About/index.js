import React from 'react';

import { Container, TimelineContainer, ExperienceTitle } from './styles';
import Timeline from '../../components/Timeline';

export default function About() {
  return (
    <Container>
      <ExperienceTitle>Experiences</ExperienceTitle>
      <TimelineContainer>
        <Timeline />
      </TimelineContainer>
    </Container>
  );
}
