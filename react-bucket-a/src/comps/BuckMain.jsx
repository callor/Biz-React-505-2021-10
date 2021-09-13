import React, { useState } from "react";
import BuckList from "./BuckList";
import BuckInput from "./BuckInput";
import uuid from "react-uuid";
import moment from "moment";

function BuckMain() {
  const [bucketList, setBuckList] = useState([]);
  //     {
  //       b_id: 0,
  //       b_flag: 0,
  //       b_start_date: "2021-09-13",
  //       b_title: "리액트 정복",
  //       b_end_date: "",
  //       b_end_check: false,
  //       b_cancel: false,
  //     },
  //     {
  //       b_id: 1,
  //       b_flag: 0,
  //       b_start_date: "2021-09-13",
  //       b_title: "추석맞이",
  //       b_end_date: "",
  //       b_end_check: false,
  //       b_cancel: false,
  //     },
  //   ]);

  const buck_insert = (bucket_text) => {
    const bucket = {
      b_id: uuid(),
      b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      b_title: bucket_text,
      b_flag: 0,
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    };
    // 원래있던 bucketList에 새로운 bucket을 추가하기
    setBuckList([...bucketList, bucket]);
  };

  const flag_change = (id) => {
    const _bucketList = bucketList.map((bucket) => {
      /**
       * 전달받은 id와 같은 항목의 flag를 1 증가시키기
       */
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_flag: bucket.b_flag + 1,
        };
      } else {
        return bucket;
      }
    });
    // 원래의 bucketList를 _bucketList로 바꾸기
    setBuckList(_bucketList);
  };

  return (
    <div className="w3-container-fluid">
      <BuckInput buck_insert={buck_insert} />
      {/* BuckList 컴포넌트에 bucketList 상태(변수) 전달하기  */}
      <BuckList bucketList={bucketList} flag_change={flag_change} />
    </div>
  );
}

export default BuckMain;
