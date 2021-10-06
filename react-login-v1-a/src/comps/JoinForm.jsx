import "../css/JoinForm.css";
import { useState } from "react";

import React from "react";

function JoinForm() {
  const onChangeAccount = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitAccount = async (e) => {
    // if(user.userid === "") {
    if (!user?.userid) {
      alert("아이디를 입력해야 합니다");
      return;
    }

    if (!user?.password) {
      alert("비밀번호를 입력해야 합니다");
      return;
    }

    if (!user.re_password) {
      alert("비밀번호 확인을 입력해 주세요");
      return;
    }

    if (user.password !== user.re_password) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
      return;
    }
    if (!user?.email) {
      alert("이메일 주소는 필수 항목입니다");
      return;
    }

    const joinData = {
      userid: user.userid,
      password: user.password,
      email: user.email,
    };

    const response = await fetch("http://localhost:8080/users/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinData),
    });

    if (response.ok) {
      const json = await response.json();
      alert(JSON.stringify(json));
    }
  };

  return (
    <div className="join_form">
      <input
        name="userid"
        value={user.userid}
        placeholder="아이디를 입력해주세요"
        onChange={onChangeAccount}
      />
      <input
        name="password"
        type="password"
        value={user.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangeAccount}
      />
      <input
        name="re_password"
        type="password"
        value={user.re_password}
        placeholder="비밀번호를 한번 더 입력해주세요"
        onChange={onChangeAccount}
      />
      <input
        name="email"
        type="email"
        value={user.email}
        placeholder="E-mail을 입력해 주세요"
        onChange={onChangeAccount}
      />

      <button onClick={onSubmitAccount}>회원가입</button>
    </div>
  );
}

export default JoinForm;
