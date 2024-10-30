import * as React from "react";

interface FunctionCounterProps {}

const FunctionCounter = (props: FunctionCounterProps) => {
  const [counter, setCounter] = React.useState<number>(0);

  const increment = () => {
    console.log("before", counter);
    setCounter((c) => c + 1);
  };

  React.useEffect(() => {
    console.log("after", counter);
  }, [counter]);

  return (
    <>
      <h3>Function Counter</h3>
      <h4>Counter: {counter}</h4>
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
    </>
  );
};

export default FunctionCounter;
