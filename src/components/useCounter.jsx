import { useReducer } from 'react';
import { reducer, initialState } from './reducer';

export function useCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = (amount) => dispatch({ type: 'increment', payload: amount });
  const decrement = (amount) => dispatch({ type: 'decrement', payload: amount });
  const reset = () => dispatch({ type: 'reset' });

  return {
    count: state.count,
    increment,
    decrement,
    reset,
  };
}
