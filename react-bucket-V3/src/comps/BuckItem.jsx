import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

// { bucket }
// props.bucket을 직접 사용하도록 변수 생성하기
function BuckItem({ args, bucket }) {
  const { flag_change, bucket_update, bucket_complet, bucket_cancel } = args;

  const [b_update, setB_Update] = useState({
    b_title: "",
    isEdit: false,
  });

  const onItemClick = (e) => {
    // e.currentTarget
    // 직접 이벤트가 설정된 tag
    const itemTr = e.currentTarget;
    let b_id = itemTr.dataset.id;

    const itemTd = e.target;
    b_id = e.target.closest("TR").dataset.id;

    if (itemTd.tagName === "TD") {
      const className = itemTd.className;
      if (className.includes("b_flag")) {
        flag_change(b_id);
      } else if (className.includes("b_title")) {
        // input box 나타나는 코드
        setB_Update({
          b_title: bucket.b_title,
          isEdit: true,
        });
      } else if (className.includes("b_end_date")) {
        // 완료를 클릭하면
        // 현재 날짜 시간을 표시하여 완료되었음을 나타내기
        const message = bucket.b_end_check
          ? "완료를 취소합니다"
          : "버킷을 완료했나요?";
        if (window.confirm(message)) {
          bucket_complet(b_id);
        }
      }
    }
    if (itemTd.tagName === "INPUT" && itemTd.type === "checkbox") {
      bucket_cancel(b_id);
    }
  };

  const bucket_KeyDown = (e) => {
    if (e.keyCode === 13) {
      const b_title = e.target.value;
      const b_id = e.target.closest("TR").dataset.id;
      // alert(b_id);
      setB_Update({ ...b_update, isEdit: false });

      // b_id와 b_title을 BucketMain으로 보내서 update수행하기
      bucket_update(b_id, b_title);
    } else if (e.keyCode === 27) {
      setB_Update({ ...b_update, isEdit: false });
    }
  };

  return (
    <tr
      className={bucket.b_cancel ? "cancel" : ""}
      key={bucket.b_id}
      data-id={bucket.b_id}
      onClick={onItemClick}
    >
      <td className="b_flag">{b_flag_text[bucket.b_flag % 4]}</td>
      <td className="b_start_date">{bucket.b_start_date}</td>

      {b_update.isEdit ? (
        <td className="b_title">
          <input onKeyDown={bucket_KeyDown} defaultValue={b_update.b_title} />
        </td>
      ) : (
        <td className="b_title">{bucket.b_title}</td>
      )}

      {bucket.b_end_check ? (
        <td className="b_end_date">{bucket.b_end_date}</td>
      ) : (
        <td className="b_end_date">◎</td>
      )}
      <td>
        <input type="checkbox" defaultChecked={bucket.b_cancel} />
      </td>
    </tr>
  );
}

export default BuckItem;
