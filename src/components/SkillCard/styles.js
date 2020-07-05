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

export const SkillsListContainer = styled.div`
  background-color: var(--dark-purple);
  display: flex;
  justify-content: center;
  text-align: left;
  padding: 15px;
  margin-top: 30px;
  height: 100%;
  border-radius: 22px;
`;

export const ListSkills = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Skill = styled.li`
  border: 1px solid var(--primary);
  border-radius: 8px;
  display: inline-block;
  font-size: 12px;
  color: var(--white);
  margin: 0 7px 7px 0;
  padding: 7px;
  &:hover {
    transform: scale(1.08);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`;
