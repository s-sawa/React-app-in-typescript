import React, { useState } from "react";

const Counter: React.FC<Record<string, never>> = () => {
  // useState<>ではvalueの型を設定し、それがsetValueの型となる
  const [value, setValue] = useState<number>(0);
  const increment = () => {
    // setValue(value + 1);
    setValue((prevState) => prevState + 1); // コールバック関数もOK
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
