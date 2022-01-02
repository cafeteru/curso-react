import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [count, setCount] = useState(initialState);

  const increment = (value = 1) => setCount(count + value);
  const decrement = (value = 1) => setCount(count - value);
  const reset = () => setCount(0);

  return {
    count,
    increment,
    decrement,
    reset,
  };
};
