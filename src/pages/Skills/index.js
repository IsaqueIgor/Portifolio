import React from 'react';

import SkillCard from '../../components/SkillCard';
import { Container, IconContainter } from './styles';

export default function Skill() {
  return (
    <Container>
      <SkillCard title='Frontend'></SkillCard>
      <SkillCard title='Backend' />
      <SkillCard title='Mobile' />
      <SkillCard title='Others' />
    </Container>
  );
}
