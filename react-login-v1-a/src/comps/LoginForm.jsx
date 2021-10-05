import "../css/LoginForm.css";
import { useState } from "react";

function LoginForm() {
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const onChage = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    const res = await fetch("http://localhost:8080/users");
    if (res.ok) {
      const users = await res.json();
      console.log("userid", account.userid);
      const user = users.find((item) => {
        return item.userid === account.userid;
      });
      console.log("user", user);

      if (!user) {
        alert("아이디가 없음");
        return;
      }
      if (user.password !== account.password) {
        alert("비번 오류");
        return;
      }
      alert("로그인 성공");
    }
  };

  return (
    <div className="login_form">
      <input
        name="userid"
        placeholder="아이디를 입력하세요"
        onChange={onChage}
      />
      <input
        name="password"
        type="password"
        placeholder="비빌번호를 입력하세요"
        onChange={onChage}
      />
      <button onClick={onLogin}>로그인</button>
    </div>
  );
}

export default LoginForm;
