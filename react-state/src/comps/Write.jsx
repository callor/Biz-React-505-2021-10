import React from "react";
import "./write.css";

/**
 * Write = ( {bbs} ) =>{}
 * 매개변수로 전달받은 변수(들)중에서 나는 bbs만 받겠다
 */
const Write = ({ bbs }) => {
  const { b_date, b_time, b_writer, b_subject, b_content } = bbs;
  return (
    <div className="bbs_write_form">
      <div>
        <label>작성일자</label>
        <input name="b_date" type="date" defaultValue={b_date} />
      </div>
      <div>
        <label>작성시각</label>
        <input name="b_time" type="time" defaultValue={b_time} />
      </div>
      <div>
        <label>글쓴이</label>
        <input name="b_writer" defaultValue={b_writer} />
      </div>
      <div>
        <label>제목</label>
        <input name="b_subject" defaultChecked={b_subject} />
      </div>
      <div>
        <label>내용</label>
        <input name="b_content" defaultValue={b_content} />
      </div>
    </div>
  );
};

export default Write;
