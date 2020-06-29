import React from 'react';

import SkillCard from '../../components/SkillCard';
import { Container } from './styles';

export default function Skill() {
  return (
    <Container>
      <SkillCard />
      <SkillCard />
      <SkillCard />
    </Container>
  );
}
