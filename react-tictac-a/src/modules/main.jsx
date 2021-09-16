const arrayEx = () => {
  const arrayRow = [0, 0, 0];
  const arrayCol = [0, 0, 0];

  arrayRow.map((row) => {
    const cols = arrayCol.map((col) => {
      // 한 라인의 button 만들기
    });
    // 각 라인의 컴포넌트 만들기
  });

  const arrFuncCol = Array(3).fill(0);
  const arrFuncRow = Array(3).fill(arrFuncCol);

  /**
   * const arrFuncBox = Array(3).fill( [Array(3).fill(0)]   );
   * const arrFuncBox = [
   * 	[
   * 		[0,0,0],
   * * 		[0,0,0],
   * * 		[0,0,0],
   * 	]
   * ]
   */
  // const arrFuncBox = Array(3).fill( [...Array(3).fill(0)]   );
  const arrFuncBox = Array(3).fill(Array(3).fill(0));
  arrFuncBox.map((sub) => {
    sub.map((b) => {
      // 한라인의 button 만들기
    });
    // 각 라인의 컴포넌트 만들기
  });
};

/**
 * 다차원 배열
 * 배열 속에 요소가 배열로 이루어진 배열
 * a = [1,2,3,4,5]
 * console.log( a[0] )
 * a[0] = 3
 *
 * b = [
 * 	[1,2,3,4,5]
 * ]
 * console.log(b[0][1])
 * b[0][2] = 100
 *
 * c = [
 * 	[
 * 		[1,2,3,4,5]
 * 	]
 * ]
 * console.log(c[0][0][1])
 *
 */

const RenderSquare = () => {
  const arrayBox = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const buttons = arrayBox.map((subBox) => {
    const buttonCols = subBox.map(() => {
      // 한라인의 button 만들기
      return <button />;
    });
    // 각 라인의 컴포넌트 만들기
    return <div className="box_row">{buttonCols}</div>;
  });
  return buttons;
};

export { RenderSquare };
