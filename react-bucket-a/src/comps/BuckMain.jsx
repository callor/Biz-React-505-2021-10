import React, { useState } from "react";
import BuckList from "./BuckList";
import BuckInput from "./BuckInput";

function BuckMain() {
  const [bucketList, setBuckList] = useState([
    {
      b_id: 0,
      b_flag: 0,
      b_start_date: "2021-09-13",
      b_title: "리액트 정복",
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    },
    {
      b_id: 1,
      b_flag: 0,
      b_start_date: "2021-09-13",
      b_title: "추석맞이",
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    },
  ]);

  const flag_change = (id) => {
    bucketList.map((bucket) => {
      // alert(bucket.b_flag);
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_flag: bucket.b_flag + 1,
        };
      } else {
        return bucket;
      }
    });
    setBuckList([...bucketList]);
  };

  return (
    <div className="w3-container-fluid">
      <BuckInput />
      {/* BuckList 컴포넌트에 bucketList 상태(변수) 전달하기  */}
      <BuckList bucketList={bucketList} flag_change={flag_change} />
    </div>
  );
}

export default BuckMain;
