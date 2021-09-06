import React from "react";

const view = (props) => {
  const { friend } = props;
  return (
    <div>
      <h1>{friend.f_name}</h1>
      <h1>{friend.f_addr}</h1>
    </div>
  );
};

export default view;
