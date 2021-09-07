import React from "react";
import "./view.css";

/**
 * View.jsx
 * 	Javascript Extention React 문법형 JS 확장편
 *
 * 컴포넌트 함수의 매개변수
 * 한개의 매개변수로 모든 전달받은 변수들을 받을 수 있다
 * props.변수이름 과 같은 형식으로 실제 데이터를 얻을 수 있다
 */
function View(props) {
  //props를 통해서 전달받은 변수(들)중에서 bbs이름을 가진 변수를
  // 추출하라
  const { bbs } = props;
  return (
    <div className="bbs_view">
      <div>
        <label>작성일</label>
        <span>{props.bbs.b_date}</span>
      </div>
      <div>
        <label>작성시각</label>
        <span>{bbs.b_time}</span>
      </div>
      <div>
        <label>글쓴이</label>
        <span>{bbs.b_writer}</span>
      </div>
      <div>
        <label>제목</label>
        <span>{bbs.b_subject}</span>
      </div>
      <div>
        <label>내용</label>
        <span>{bbs.b_content}</span>
      </div>
    </div>
  );
}

export default View;
