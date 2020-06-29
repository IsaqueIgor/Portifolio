import React from 'react';
import styled from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout />
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
