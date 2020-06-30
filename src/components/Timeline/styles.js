import styled from 'styled-components';

import { Work, School } from 'styled-icons/material';

export const WorkIcon = styled(Work)`
  background: 'var(--secundary)';
  border-radius: 50%;
  color: '#fff';
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.15);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`;

export const SchoolIcon = styled(School)`
  background: 'var(--secundary)';
  border-radius: 50%;
  color: '#fff';
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.15);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`;
