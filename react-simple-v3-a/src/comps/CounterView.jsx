import React from "react";

function CounterView({ count }) {
  const number = Number(count);

  return (
    <div>
      <div>두수의 합: {number + 20}</div>
      <div>두수의 곱: {number * number}</div>
    </div>
  );
}

export default CounterView;
