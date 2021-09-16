import React from "react";

function Board() {
  const arrayRow = [0, 0, 0];
  const arrayCol = [0, 0, 0];

  arrayRow.map((row) => {
    const cols = arrayCol.map((col) => {
      // 한 라인의 button 만들기
    });
    // 각 라인의 컴포넌트 만들기
  });

  const arrayBox = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  arrayBox.map((sub) => {
    sub.map((b) => {
      // 한라인의 button 만들기
    });
    // 각 라인의 컴포넌트 만들기
  });

  const arrFuncCol = Array(3).fill(0);
  const arrFuncRow = Array(3).fill(arrFuncCol);

  const arrFuncBox = Array(3).fill([Array(3).fill(0)]);

  return (
    <div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}

export default Board;
