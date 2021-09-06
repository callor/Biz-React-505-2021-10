const json = {
  name: "홍길동",
  addr: "이몽룡",
  tel: "010-111",
};
console.log(json);

const json1 = { ...json };
console.log(json1);

// json에 담긴 데이터를 json2로 복제하라
// 복제를 하면서 tel 속성의 값만 222-2222로 변경하여 저장하라
const json2 = { ...json, tel: "222-2222" };
console.log(json2);
