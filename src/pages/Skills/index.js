import React from 'react';

import SkillCard from '../../components/SkillCard';
import { Container, IconContainter } from './styles';

import { FrontendSkills } from '../../assets/skills';

export default function Skill() {
  return (
    <Container>
      <SkillCard title={FrontendSkills.title}></SkillCard>
      <SkillCard title='Backend' />
      <SkillCard title='Mobile' />
      <SkillCard title='Others' />
    </Container>
  );
}
