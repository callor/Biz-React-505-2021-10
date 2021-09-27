import React from "react";

function AddressView({ address }) {
  return (
    <div>
      <div>이름 : {address.u_name}</div>
      <div>주소 : {address.u_addr}</div>
      <div>전화번호 : {address.u_tel}</div>
      <div>나이 : {address.u_age}</div>
    </div>
  );
}

export default AddressView;
