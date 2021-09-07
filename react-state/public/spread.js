// json1에 nation이라는 속성을 만들고
// 대한민국 데이터를 저장하라
let json1 = { nation: "대한민국" };
// json1객체의 nation 속성(요소)에 담긴 값이 무엇이냐
console.log(json1.nation);

// nation 이라는 문자열 변수를 만들고 "이름" 이라는 문자열을 저장하기
const nation = "이름";

// nation에 담긴 문자열(이름)을 속성으로 만들고 대한민국 데이터를 저장하라
let json = { [nation]: "대한민국" };
// let json = {이름 : "대한민국"}
console.log(json.이름);
