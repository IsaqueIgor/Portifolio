import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--dark-purple);
  opacity: 0.4;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 22px;
  height: 80%;
  min-height: 300px;
  max-height: 80%;
  transition: 0.5s ease;
  margin: 26px 26px 0 0;
  width: calc(1 / 4 * 90% - (1 - 1 / 4) * 26px);
  &:hover {
    transform: scale(1.08);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`;
