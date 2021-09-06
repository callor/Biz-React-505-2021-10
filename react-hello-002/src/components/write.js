import React from "react";

const write = (props) => {
  const { fd, onChangeHandle } = props;
  return (
    <div>
      <p>
        <input
          name="f_name"
          defaultValue={fd.f_name}
          onChange={onChangeHandle}
        />
      </p>
      <p>
        <input
          name="f_addr"
          defaultValue={fd.f_addr}
          onChange={onChangeHandle}
        />
      </p>
    </div>
  );
};

export default write;
