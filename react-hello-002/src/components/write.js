import React from "react";

const write = (props) => {
  const { friend, onChangeHandle } = props;
  return (
    <div>
      <p>
        <input
          name="f_name"
          defaultValue={friend.f_name}
          onChange={onChangeHandle}
        />
      </p>
      <p>
        <input
          name="f_addr"
          defaultValue={friend.f_addr}
          onChange={onChangeHandle}
        />
      </p>
    </div>
  );
};

export default write;
