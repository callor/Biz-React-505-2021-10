import React, { useState } from "react";
import BuckList from "./BuckList";
import BuckInput from "./BuckInput";
import uuid from "react-uuid";
import moment from "moment";

function BuckMain() {
  // 버킷리스트를 담을 배열
  const [bucketList, setBuckList] = useState([]);

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

  // 리스트에서 FLAG항목을 클릭하면 실행할 함수
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

  /*
  int[] nums = {1,2,3,4,5,6,7}
  for(int i = 0 ; i < nums.length ; i++) {
	  if(nums[i] == 3) {
		  break;
	  }
  }
 */

  // 리스트에서 input box에 버킷을 변경한 후 Enter를 누르면
  // 실행할 함수
  const bucket_update = (id, title) => {
    const _bucketList = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        // b_id가 id값과 같으면
        // bucket에 담긴 항목중에서 b_title 항목만
        // 변경하여 통째로 return
        return { ...bucket, b_title: title };
      } else {
        // b_id가 id와 같지 않으면
        // 아무것도 변경없이 bucket을 그대로 return
        return bucket;
      }
    });
    // 원래의 list를 새로운 list로 바꾸기
    setBuckList(_bucketList);
  };

  const bucket_complet = (id) => {
    bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_end_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
          b_end_check: true,
        };
      } else {
        return bucket;
      }
    });
  };

  const args = {
    bucketList: bucketList,
    flag_change: flag_change,
    bucket_update: bucket_update,
    bucket_complet: bucket_complet,
  };

  return (
    <div className="w3-container-fluid">
      <BuckInput buck_insert={buck_insert} />
      {/* BuckList 컴포넌트에 bucketList 상태(변수) 전달하기  */}
      {/* 
	  BucketItem.jsx에서 실행할 flag_change() bucket_update() 
	  함수를 매개변수로 전달하기

	  */}
      <BuckList
        args={args}
        // bucketList={bucketList}
        // flag_change={flag_change}
        // bucket_update={bucket_update}
      />
    </div>
  );
}

export default BuckMain;
