import React from "react";
import "./write.css";

const Write = () => {
  return (
    <div className="bbs_write_form">
      <div>
        <label>작성일자</label>
        <input name="b_date" type="date" />
      </div>
      <div>
        <label>작성시각</label>
        <input name="b_time" type="time" />
      </div>
      <div>
        <label>글쓴이</label>
        <input name="b_writer" />
      </div>
      <div>
        <label>제목</label>
        <input name="b_subject" />
      </div>
      <div>
        <label>내용</label>
        <input name="b_content" />
      </div>
    </div>
  );
};

export default Write;
