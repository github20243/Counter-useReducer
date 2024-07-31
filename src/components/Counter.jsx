import React from 'react';
import { useCounter } from './useCounter';
import styled, { keyframes } from 'styled-components';


function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  const isIncrementDisabled = count >= 40;
  const isDecrementDisabled = count <= 0;

  return (
    <Container>
      <CountText>Count: {count}</CountText>
      <div>
        <NeonButton onClick={() => increment(10)} disabled={isIncrementDisabled}>+10</NeonButton>
        <NeonButton onClick={() => increment(20)} disabled={isIncrementDisabled}>+20</NeonButton>
        <NeonButton onClick={() => decrement(7)} disabled={isDecrementDisabled}>-7</NeonButton>
        <NeonButton onClick={() => decrement(3)} disabled={isDecrementDisabled}>-3</NeonButton>
        <NeonButton onClick={reset}>Reset</NeonButton>
        <NeonButton onClick={() => increment(1)} disabled={isIncrementDisabled}>+1</NeonButton>
        <NeonButton onClick={() => decrement(1)} disabled={isDecrementDisabled}>-1</NeonButton>
      </div>
    </Container>
  );
}

export default Counter;


const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 5px #00ff99, 0 0 25px #00ff99, 0 0 50px #00ff99, 0 0 100px #00ff99;
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 10px #00ff99, 0 0 30px #00ff99, 0 0 60px #00ff99, 0 0 120px #00ff99;
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 5px #00ff99, 0 0 25px #00ff99, 0 0 50px #00ff99, 0 0 100px #00ff99;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4);
  animation: ${pulse} 2s infinite;
`;

const CountText = styled.p`
  font-size: 3rem;
  color: #fff;
  text-shadow: 0 0 10px #00ff99, 0 0 20px #00ff99, 0 0 30px #00ff99;
  margin: 0;
  padding: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
`;

const NeonButton = styled.button`
  font-size: 1.5rem;
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  background: linear-gradient(45deg, #00ff99, #00ccff);
  color: white;
  text-shadow: 0 0 5px #00ff99, 0 0 10px #00ff99, 0 0 15px #00ff99;
  box-shadow: 0 0 5px #00ff99, 0 0 10px #00ff99, 0 0 20px #00ff99;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px #00ff99, 0 0 40px #00ff99, 0 0 60px #00ff99;
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: #777;
    box-shadow: none;
    cursor: not-allowed;
  }
`;