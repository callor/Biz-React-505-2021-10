import React from "react";
import { useState, useEffect, useCallback } from "react";

// JS 코드에 전반적으로 사용되는 날짜, 시간을 관리하는 객체
import moment from "moment";
import UUID from "react-uuid";

// list 의 제목을 배열로 선언
const headArray = ["날짜", "시간", "기억할일"];

const remeberSampleDat = {
  r_id: "0001",
  r_date: "2021-09-08",
  r_time: "10:36:00",
  r_remember: "나의 리맴버 리스트",
  r_comp: false, // 완료표식
};

function RemList() {
  /**
   * 함수를 선언하는 이유
   * 반복적으로 사용하는 코드를 하나로 묶어두고
   * 함수이름을 통해서 마치 한개의 명령문처럼 코드를
   * 사용하는데 목적이 있다
   *
   * const f =()=>{
   * 	console.log("대한민국")
   * }
   *
   * 선언된 함수를 3번 호출하면
   * f()
   * f()
   * f()
   *
   * 대한민국
   * 대한민국
   * 대한민국
   *
   * 위의 예제는 함수를 1번 만들고
   * 3번 활용(사용)한 것이다
   *
   * 일반적인 함수는 사용하기 전에 만들고, 사용을 계속하고.. 이런식으로
   * 진행이 되는데
   *
   * react는 한번 rendering된 화면은 특별한 값(상태)의 변화가 발생하면
   * 그 부분만 다시 그리는 동작이 발생한다
   *
   * 어떤 화면(컴포넌트)이 하나 생성되었는데
   * 그 화면을 다시 열고, 닫는 동작이 반복될때
   * 내부의 코드는 변함이 없을 것이다
   * 이런 과정에 선언된 함수는 화면이 다시 열릴때마다 반복적으로
   * 다시 선언되고 만들어진다
   * 코드는 변함이 없고 내부에 화면을 그렸던 코드는
   * 이전에 생성된 코드가 있는데
   * 함수만 계속해서 반복적으로 선언, 생성이 되니 불편하다
   *
   * 그래서 함수를 useCallback( 함수() )로 감싸버린다
   * react야 함수()를 네가(useCallback) 보관하고 있다가
   * 다음에 내가 또 함수() 가 필요할때 나에게 다시 달라
   *
   * memoization
   * 함수() 가 이미 이전에 한번이라도 생성된 적이 있으면
   * 재 활용을 하고 없을때만 만들어서 사용하겠다 라는 의미
   *
   * react는 화면이 랜더링 될때마다 함수들이 생성된다
   * 기존에 있던 함수는 버려지고 새로운 함수가 게속해서 반복 생성된다
   *
   * useCallback()으로 감싼 함수는 memoization되어
   * 코드나 값이 변경되지 않으면 함수코드를 재 사용(활용)하게 된다
   *
   *
   */
  const rem_header = useCallback(() => {
    // 제목배열을 map()를 이용하여 forEach하기
    return headArray.map((text) => {
      // 제목배열의 요소인 문자열을 포함하는 th tag를 생성하여 return
      return <th key={UUID()}>{text}</th>;
    });
  }, []);

  /**
   * rememberList를 담을 배열을 "상태"로 선언하기
   */
  const [rememberList, setRememberList] = useState([]);

  /**
   * useEffect가 실행(호출할) 함수를 선언하였다
   * 이 함수는 화면이 rendering될때 한번만 호출될 함수
   * 하지만 react에 의해서 현재 화면이 보여지는 상태가 되면
   * 이 함수를 계속해서 다시 생성한다
   * 현재의 컴퓨터 성능으로는 큰 문제가 없지만
   * 이러한 과정이 계속해서 반복된다면 메모리 등에 문제를 일으킬수 있다
   *
   * react 16 에서는
   * 이러한 함수를 useCallback()으로 감싸도록 권장하고 있다
   * useCallback()으로 감싸진 함수는
   * 이전에 한번이라도 만들어진 경우는 그대로 재 사용하고
   * 없는 경우에만 함수를 생성한다
   */
  const fetchCallback = useCallback(() => {
    const remString = localStorage.rememberList;
    if (remString) {
      console.log("Fetch Data");
      const remJSON = JSON.parse(remString);
      setRememberList(remJSON);
    }
  }, []);

  // 상태가 없으면 최초에 rendering될때 한번만 함수를 호출한다
  // 변화를 감시할 상태 데이터가 없으면
  //	최초에 rendering(app 시작될때, page가 열릴때, 새로고침)될때
  //	fetchData를 실행한다
  useEffect(fetchCallback, [fetchCallback]);

  const saveStorage = () => {
    console.log("EFFECT");
    /**
     * rememberList 객체 배열에 담긴 데이터를
     * JSON String 문자열로 변환하여 JSON.stringify()
     * localStorage에 rememberList 라는 이름으로 저장하라
     */
    if (rememberList.length > 0) {
      /**
       * 객체 배열 sort하기
       * 배열.sort(compareFunction(p,n))
       *
       * compareFunction의 return값에 따라서 배열의 위치가 교환된다
       * return 1 : next가 앞으로, pre가 뒤로 이동
       * retuen -1 : pre가 앞으로
       * return 0 : 그대로 있어
       *
       * map(), filter() 는 결과를 return 하여 다른 배열을 생성한다
       * sort()는 자기 자신을 변경한다
       */
      rememberList.sort((pre, next) => {
        console.log("pre", pre.r_comp, "next", next.r_comp);
        if (pre.r_comp && !next.r_comp) return 1;
        if (!pre.r_comp && next.r_comp) return -1;
        return 0;
      });
      localStorage.rememberList = JSON.stringify(rememberList);
    }
  };

  // useEffect(함수, 상태대상)
  // 화면에 rendering이 발생할때 실행되는 public event 연결
  // 일부러 호출하거나, 실행하지 않아도
  // 어떤 조건이 발생하면 자동으로 호출되어 실행되는 함수
  useEffect(saveStorage, [rememberList]);

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
        key={remember.r_id}
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
      // const value = e.target.value
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

      /**
       * const ar = [1,2,3,4,5] 기존의 배열을
       * const arCopy = [...ar] 새로운 arCopy로 복제
       *
       * const arCopyAdd = [...ar,9,10] 기존배열을 복제하면서 요소룰 추가하기
       * arCopyAdd ===> [1,2,3,4,5,9,10] 담기게 된다
       */
      // 생성된 remmeber 객체 데이터를 rememberList 상태에 추가하기
      // setRememberList(rememberList.concat(remember));
      // rememberList = ?? 이 아니고
      // 기존에 rememberList를 새로운 배열로 대치
      setRememberList([...rememberList, remember]);
      e.target.value = "";
    }
  };
  return (
    <table className="rem_list">
      <thead>
        <tr>{rem_header()}</tr>
      </thead>
      <tbody>
        {list_body}
        <tr>
          <td colSpan="2">기억할일</td>
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
