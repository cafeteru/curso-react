import { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2 } = state;
  return (
    <>
      <h2>Counter {counter1}</h2>
      <h2>Counter {counter2}</h2>
      <hr></hr>
      <button
        className="btn btn-primary"
        onClick={() =>
          setState({
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
