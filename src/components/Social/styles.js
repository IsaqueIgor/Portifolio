import styled from 'styled-components';
import { Linkedin, Instagram, Github } from 'styled-icons/entypo-social';

export const Container = styled.div`
  grid-area: NI;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--dark-purple);
  max-height: 100vh;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialIcon = styled.a`
  padding-bottom: 16px;
`;

export const InstagramIcon = styled(Instagram)`
  color: var(--primary);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;

export const GithubIcon = styled(Github)`
  color: var(--primary);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  color: var(--primary);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;
