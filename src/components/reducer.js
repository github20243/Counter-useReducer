export function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: Math.min(state.count + action.payload, 40) };
    case 'decrement':
      return { count: Math.max(state.count - action.payload, 0) };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

export const initialState = { count: 0 };
