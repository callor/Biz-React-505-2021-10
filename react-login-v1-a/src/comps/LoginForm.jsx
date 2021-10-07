import "../css/LoginForm.css";
import { useState } from "react";
import { useUserContext } from "../context/UserContextProvider";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const { setUser } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const history = useHistory();

  const onChage = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    const res = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        userid: account.userid,
        password: account.password,
      }),
    });

    // 서버로 부터 정상적인 응답이 오면
    // 실제 서버가 멈춰있는 상태일 경우 res 자체가 undefinded 또는 null값이다
    // if(res) {} 연산을 하면 res가 정상인지 확인할 수 있다
    // res가 정상이 아닐때는 res.ok 에서 오류가 발생을 한다
    // ES6+ 버전에서 safe null 검사를 수행하는 코드가 있다
    // res가 정상(null, undefined 가 아니면 .ok 속성을 검사하라)
    // null 로 인한 오류를 방지하는 코드다
    console.log("res", res);
    if (res.status === 401) {
      alert("아이디 또는 비번 확인하세요");
    }
    if (res?.ok) {
      const resultUser = await res.json();

      console.log("userid", account.userid);

      //const user = users.find((item) => {
      //  return item.userid === account.userid;
      //});

      console.log("user", resultUser);

      if (!resultUser?.userid) {
        alert("없는 ID 입니다");
        return;
      }
      if (resultUser.password !== account.password) {
        alert("비번 오류");
        return;
      }
      alert("로그인 성공");
      setUser(resultUser);
      history.replace("/");
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
