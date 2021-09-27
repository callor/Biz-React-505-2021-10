import React from "react";

function CounterInput({ setNumber }) {
  const onChageHandler = (e) => {
    const number = e.target.value;
    console.log(number);
    setNumber(number);
  };
  return (
    <div>
      <input placeholder="숫자입력" onChange={onChageHandler} />
    </div>
  );
}

export default CounterInput;
