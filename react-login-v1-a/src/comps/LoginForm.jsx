import React from "react";

function LoginForm() {
  return (
    <div className="login_form">
      <input name="userid" placeholder="아이디를 입력하세요" />
      <input
        name="password"
        type="password"
        placeholder="비빌번호를 입력하세요"
      />
      <button>로그인</button>
    </div>
  );
}

export default LoginForm;
