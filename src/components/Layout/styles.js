import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 68px 240px auto 240px;
  grid-template-rows: 86px auto 162px;
  grid-template-areas:
    'NL HM HM HM'
    'NP HM HM HM'
    'NI HM HM HM';
  height: 100vh;
`;
