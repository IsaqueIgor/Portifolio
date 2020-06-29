import styled from 'styled-components';

import { Home, User, Brain, Book } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
  grid-area: NP;
  display: flex;
  flex-direction: column;
  background: var(--dark-purple);
  justify-content: center;
  min-height: 300px;
  max-height: 100vh;
`;

export const IconContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
  &hover {
  }
`;

export const HomeIcon = styled(Home)`
  width: 26px;
  height: 26px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
    width: 29px;
    height: 29px;
  }
`;

export const UserIcon = styled(User)`
  width: 26px;
  height: 26px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
    width: 29px;
    height: 29px;
  }
`;

export const BrainIcon = styled(Brain)`
  width: 26px;
  height: 26px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
    width: 29px;
    height: 29px;
  }
`;

export const BookIcon = styled(Book)`
  width: 26px;
  height: 26px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
    width: 29px;
    height: 29px;
  }
`;
