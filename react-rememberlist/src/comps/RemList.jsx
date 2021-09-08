import React from "react";
import { useState } from "react";

// JS 코드에 전반적으로 사용되는 날짜, 시간을 관리하는 객체
import moment from "moment";
import UUID from "react-uuid";

// list 의 제목을 배열로 선언
const headArray = ["날짜", "시간", "기억핟일"];
const rem_header = () => {
  // 제목배열을 map()를 이용하여 forEach하기
  return headArray.map((text) => {
    // 제목배열의 요소인 문자열을 포함하는 th tag를 생성하여 return
    return <th>{text}</th>;
  });
};

const remeberSampleDat = {
  r_id: "0001",
  r_date: "2021-09-08",
  r_time: "10:36:00",
  r_remember: "나의 리맴버 리스트",
  r_comp: false, // 완료표식
};

function RemList() {
  /**
   * rememberList를 담을 배열을 "상태"로 선언하기
   */
  const [rememberList, setRememberList] = useState([]);

  /**
   * list중 한 요소를 더블클릭하면
   * 선택된 요소의 UUID값을 추출하여
   * 1. 해당 요소를 삭제하기
   * 2. 해당 요소의 r_comp 값을 완료된 것으로 표시하기
   *
   */
  const trOnClick = (e) => {
    const td = e.target;
    if (td.tagName === "TD") {
      const uuid = td.closest("TR").dataset.uuid;
      // alert(uuid);
      /**
       * 리스트에서 선택된 요소의 UUID값이 담긴 것만 빼고(filtering)
       * 새로운 복제 _list를 만들기
       */
      // const _list = rememberList.filter((remember) => {
      //  return remember.r_id !== uuid;
      // });
      // filtering된 list를 rememberList로 대치하기

      const _list = rememberList.map((remember) => {
        if (remember.r_id === uuid) {
          return { ...remember, r_comp: !remember.r_comp };
        }
        return remember;
      });

      setRememberList([..._list]);
    }
  };
  const list_body = rememberList.map((remember) => {
    return (
      <tr
        data-uuid={remember.r_id}
        className={remember.r_comp ? "comp" : ""}
        onDoubleClick={trOnClick}
      >
        <td>{remember.r_date}</td>
        <td>{remember.r_time}</td>
        <td>{remember.r_remember}</td>
      </tr>
    );
  });

  /**
   * input box입력을 하는 과정에서 Enter를 누르면 ...
   *
   * 데이터를 어딘가(rememberList 상태)에 추가하기
   *
   */
  const onKeyDown = (e) => {
    // 키보드로 입력을 하는 도중 Enter키를 누르면
    if (e.keyCode === 13) {
      // 현재까지 입력된 문자열들을 추출한다
      // 문자열은 input box의 value 속성에 담겨 있다
      const { value } = e.target;
      // alert("Enter" + value);

      // input box 에 입력된 문자열을 rememberList에 담기위해서
      // 객체로 생성
      const remember = {
        r_id: UUID(),
        // moment()를 사용하여 현재 시스템의 날짜와 시간 문자열로 가져오기
        r_date: moment().format("YYYY[-]MM[-]DD"),
        r_time: moment().format("HH:mm:ss"),
        r_remember: value,
        r_comp: false,
      };

      // 생성된 remmeber 객체 데이터를 rememberList 상태에 추가하기
      // setRememberList(rememberList.concat(remember));
      setRememberList([...rememberList, remember]);
      e.target.value = "";
    }
  };
  return (
    <table className="rem_list">
      <tr>{rem_header()}</tr>
      <tbody>
        {list_body}
        <tr>
          <td colspan="2">기억할일</td>
          <td>
            <input
              onKeyDown={onKeyDown}
              name="r_remember"
              placeholder="기억할일"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default RemList;
