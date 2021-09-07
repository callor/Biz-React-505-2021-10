import React from "react";
import "../css/write.css";

function BBsWrite() {
  return (
    <div className="bbs_write">
      <div>
        <label htmlFor="">작성일자</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">작성시각</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">글쓴이</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">제목</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">내용</label>
        <input type="text" />
      </div>
    </div>
  );
}

export default BBsWrite;
