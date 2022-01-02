import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <>
      <h2>Counter with Hook: {count}</h2>
      <hr></hr>
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-secondary" onClick={() => decrement(3)}>
        -1
      </button>
      <button className="btn btn-danger" onClick={reset}>
        Reset
      </button>
    </>
  );
};
