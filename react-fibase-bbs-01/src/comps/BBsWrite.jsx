import React from "react";

function BBsWrite() {
  return (
    <div class="bbs_write">
      <div>
        <input type="text" placeholder="작성자" />
      </div>
      <div>
        <input type="text" placeholder="제목" />
      </div>
      <div>
        <input type="text" placeholder="내용" />
      </div>
      <div>
        <button>저장</button>
      </div>
    </div>
  );
}

export default BBsWrite;
