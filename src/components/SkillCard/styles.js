import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(70, 46, 90, 0.4);
  align-items: center;
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

export const Title = styled.h2`
  margin: 20px 0 0;
  padding: 0;
  color: #fff;
  font-size: 28px;
`;

export const IconContainter = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 26px;
`;
