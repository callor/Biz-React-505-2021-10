import React from "react";
import "../css/BBs.css";

function BBsMain() {
  return (
    <table className="bbs_list">
      <thead>
        <tr>
          <th>작성일자</th>
          <th>작성시각</th>
          <th>작성자</th>
          <th>제목</th>
        </tr>
      </thead>
    </table>
  );
}

export default BBsMain;
