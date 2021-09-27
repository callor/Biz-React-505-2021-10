import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    // count++ 절대 사용불가 코드
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>카운트 : {count}</div>
      <button onClick={plus}>증가</button>
      <button onClick={minus}>감소</button>
    </div>
  );
};

export default Counter;
