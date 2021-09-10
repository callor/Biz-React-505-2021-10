import React, { useCallback, useEffect, useState } from "react";
import { firestore } from "../config/BBSConfig";
import moment from "moment";
import { useHistory, useRouteMatch } from "react-router-dom";

// props.history
/**
 * react-router-dom을 사용하여 Routing을 구현하면
 * 메뉴에서 글쓰기를 클릭했을때 호출(랜더링)된 컴포넌트이다
 *
 * 이때 react-router-dom은 매개변수로 history라는 변수를 전달한다
 * history변수는 routing과 관련된 변수이다
 * history.push(URL) : URL로 redirect 하라는 명령이다
 *
 * react-router-dom 최신버전에서는
 * 매개변수를 지정하기 않고 use 함수를 사용하여 history를
 * 사용할수 있다.
 *
 * react use로 시작되는 함수들을 Hook 함수라고 한다
 * Hook 함수 : 가로채기 함수, 시스템(react)에 의해서
 * 자동으로 실행되거나, 작동되는 일을 수행하는 함수들..
 */
function BBsWrite() {
  const history = useHistory();
  // useRouteMatch()
  // URL을 통해서 전달된 데이터들
  // queryString, pathVarriable
  // ?변수=값     /URL/값
  const match = useRouteMatch();
  // /write/:id 로 설정된 Route에서
  // id위치에 담긴 변수 값 가져오기
  const docId = match.params.id;
  const [bbs, setBBs] = useState({
    b_writer: "",
    b_subject: "",
    b_content: "",
    b_date: "",
    b_time: "",
  });

  const findByidFetch = useCallback(async () => {
    if (docId) {
      const result = await firestore.collection("bbs").doc(docId).get();
      if (result.data()) {
        setBBs(result.data());
      }
    }
  }, [docId]);
  useEffect(findByidFetch, [findByidFetch]);

  // onChange Event 핸들러
  // 키보드로 입력한 데이터를 bbs 객체에 setting 하는 일을 수행한다
  const onChange = (e) => {
    const { value, name } = e.target;
    setBBs({ ...bbs, [name]: value });
  };

  const onClickSave = () => {
    // JSON 데이터를 JSONString으로 바꾸기
    // const str = JSON.stringify(bbs);
    // alert(str);

    // bbs의 데이터를 복제하면서
    // b_date, b_time 칼럼을 추가하겠다
    const saveBBS = {
      ...bbs,
      // bbs.b_date의 값이 "" 이
      //		아니면 bbs.b_date를 b_date 칼럼에 저장하고
      // bbs.b_date의 값이 "" 이면
      //		moment()... 값을 b_date 칼럼에 저장하라
      b_date: bbs.b_date || moment().format("YYYY[-]MM[-]DD"),
      b_time: bbs.b_time || moment().format("HH:mm:ss"),
    };

    /**
     * firestore에 데이터 저장하기
     * add()를 사용하여 저장하는데 only insert
     * doc(key).set()을 병행하여 사용하면 Update Or Insert
     */
    firestore
      .collection("bbs")
      //   .add(saveBBS)
      .doc(docId)
      .set(saveBBS)
      .then((result) => {
        console.log(result);
        history.push("/");
      });
  };

  return (
    <div class="bbs_write">
      <div>
        <input
          type="text"
          name="b_writer"
          onChange={onChange}
          placeholder="작성자"
          defaultValue={bbs.b_writer}
        />
      </div>
      <div>
        {/*  tag code 내에 작성하는 주석문 */}
        {/*  
		 	input tag의 onChage 이벤트 핸들러
			 input box에 데이터(문자열)를 입력하면
			 입력된 데이터를 상태(변수, 객체)에 보관하는 역할을 수행
		  */}
        <input
          type="text"
          name="b_subject"
          onChange={onChange}
          placeholder="제목"
          defaultValue={bbs.b_subject}
        />
      </div>
      <div>
        <input
          type="text"
          name="b_content"
          onChange={onChange}
          placeholder="내용"
          defaultValue={bbs.b_content}
        />
      </div>
      <div>
        <button onClick={onClickSave}>저장</button>
      </div>
    </div>
  );
}

export default BBsWrite;
