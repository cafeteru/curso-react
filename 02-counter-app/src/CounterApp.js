import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);
  const add = () => setCounter(counter + 1);
  const subtract = () => setCounter(counter - 1);
  const reset = () => setCounter(value);
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={add}>+1</button>
      <button onClick={subtract}>-1</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
CounterApp.propTypes = { value: PropTypes.number };
export default CounterApp;
