import React from "react";

function BuckInput(props) {
  /**
   *
   */
  const { bucketList } = props;
  return (
    <div className="w3-form-control w3-margin">
      <input
        className="w3-input w3-border w3-hover-gray w3-round"
        placeholder="버킷에 추가할 내용을 입력하세요"
      ></input>
    </div>
  );
}

export default BuckInput;
