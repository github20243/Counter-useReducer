import React from 'react';
import styled from 'styled-components';
import Counter from './components/Counter';


function App() {
  return (
    <AppContainer>
      <Title>Neon Counter App</Title>
      <Counter />
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-shadow: 0 0 10px #00ff99, 0 0 20px #00ff99, 0 0 30px #00ff99;
  margin: 20px 0;
`;
