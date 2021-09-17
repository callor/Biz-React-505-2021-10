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

// const RenderSquare = (props) => {
//  const { squares } = props;
const RenderSquare = ({ squares, changeSquares }) => {
  // const squares = props.squares
  const arrayBox = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const onButtonClick = (e) => {
    // if(e.target.tagName === "BUTTON")
    const index = e.target.dataset.index;
    changeSquares(index);
  };

  let index = 0;
  const buttons = arrayBox.map((subBox) => {
    const buttonCols = subBox.map(() => {
      // 한라인의 button 만들기
      return (
        <button data-index={index} onClick={onButtonClick}>
          {squares[index++]}
        </button>
      );
    });
    // 각 라인의 컴포넌트 만들기
    return <div className="box_row">{buttonCols}</div>;
  });
  return buttons;
};

/**
 * 승리가 결정되는 경우의 수(index)를 배열에 담고
 * [
 * 		[0, 1, 2],
 * 		[3, 4, 5],
 * 		[6, 7, 8],
 * 		[0, 3, 6],
 * 		[1, 4, 7],
 * 		[2, 5, 8],
 * 		[0, 4, 8],
 * 		[2, 4, 6],
 * ]
 * squares의 index 를 비교하면 ??
 * forEach 등을 사용하여 코드를 줄일 수 있다.
 *
 * const 배열 = [1,2,3]
 * const [a,b,c] = 배열
 *
 */
const winList = [
  // 가로방향 첫줄 ~ 세째줄
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // 세로방향 첫줄 ~ 세째줄
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // 대각선 방향
  [0, 4, 8],
  [2, 4, 6],
];
const calcWinnerFor = (squares) => {
  //   if (squares[0] && squares[0] === squares[1] && squares[0] === squares[2]) {
  //     return squares[0];
  //   } else if (
  //     squares[3] &&
  //     squares[3] === squares[4] &&
  //     squares[3] === squares[5]
  //   ) {
  //     return squares[3];
  //   }
  //   return null;
  for (let i = 0; i < winList.length; i++) {
    // const col_0 = winList[i][0];
    // const col_1 = winList[i][1];
    // const col_2 = winList[i][2];
    // 배열의 분해, 배열의 비구조화 코드
    const [col_0, col_1, col_2] = winList[i];
    if (
      squares[col_0] &&
      squares[col_0] === squares[col_1] &&
      squares[col_0] === squares[col_2]
    )
      return squares[col_0];
  }
  return null;
};

const calcWinner = (squares) => {
  // const 결과 = 원본.map()
  // 결과의 배열개수와 원본의 배열 개수는 항상 같다
  // 내용은 map의 return 결과에 따라 달라진다

  // const 결과 = 원본.filter()
  // 결과의 배열개수 <= 원본보다 작거나 같다
  // filter()의 return이 true 일때만 결과에 배열을 추가한다

  // 코드에서 비교결과가 true이면 return true 한것과 같고
  // 그때 win 의 값이 result에 담기게 된다
  // result는 개수가 없거나 1개인 배열이 된다
  const result = winList.filter((win) => {
    const [col_0, col_1, col_2] = win;
    return (
      squares[col_0] &&
      squares[col_0] === squares[col_1] &&
      squares[col_0] === squares[col_2]
    );
  });
  return result.length && squares[result[0][0]];
};

export { RenderSquare, calcWinner };
