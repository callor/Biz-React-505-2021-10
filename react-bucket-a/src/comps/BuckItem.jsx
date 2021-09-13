import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

// { bucket }
// props.bucket을 직접 사용하도록 변수 생성하기
function BuckItem({ args, bucket }) {
  const { flag_change, bucket_update, bucket_complet } = args;

  const [b_update, setB_Update] = useState({
    b_title: "",
    isEdit: false,
  });

  const bucket_KeyDown = (e) => {
    if (e.keyCode === 13) {
      const b_title = e.target.value;
      const b_id = e.target.closest("TD").dataset.id;
      // alert(b_id);
      setB_Update({ ...b_update, isEdit: false });

      // b_id와 b_title을 BucketMain으로 보내서 update수행하기
      bucket_update(b_id, b_title);
    }
  };

  return (
    <tr key={bucket.b_id}>
      <td
        // onClick={flag_chanage} : 단순히 flag_change 함수를 호출
        // flag_chanage에 id값을 매개변수로 전달하기 위한 코드
        // 클릭된 bucket의 id값을 flag_change함수에 전달하기
        onClick={() => {
          flag_change(bucket.b_id);
        }}
      >
        {b_flag_text[bucket.b_flag % 4]}
      </td>
      <td>{bucket.b_start_date}</td>
      {/*  버킷 text가 담겨있는 td box   */}
      {/*  td box를 클릭하면 isEdit 변수값을 true로 변경하기  */}
      <td
        data-id={bucket.b_id}
        onClick={() => {
          setB_Update({
            isEdit: true,
            b_title: bucket.b_title,
          });
        }}
      >
        {/* 
		  	td box 클릭되고, isEdit가 true 가되면 
			input box를 보여라
			input box에 원래 버킷의 text를 보여라
		 */}
        {b_update.isEdit ? (
          <input onKeyDown={bucket_KeyDown} defaultValue={b_update.b_title} />
        ) : (
          <span>{bucket.b_title}</span>
        )}
      </td>
      <td
        onClick={() => {
          bucket_complet(bucket.b_id);
        }}
      >
        {bucket.b_end_date}
      </td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  );
}

export default BuckItem;
