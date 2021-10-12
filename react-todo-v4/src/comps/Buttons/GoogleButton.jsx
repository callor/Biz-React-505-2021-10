import "../../css/GoogleButton.css";
import { useEffect, useRef } from "react";
import { useUserContext } from "../../context";

function GoogleButton() {
  const buttonRef = useRef();
  const { setUser } = useUserContext();

  const googleResponse = (result) => {
    const profile = result.getBasicProfile();
    const email = profile.getEmail();
    const id = profile.getId();
    const name = profile.getName();
    const image = profile.getImageUrl();
    const Token = result.getAuthResponse().id_token;

    setUser({
      userid: email,
      login_source: "GOOGLE",
    });
    alert(email + " 님 반갑습니다");
  };

  /**
   * public/index.html 파일에 script를 import 한다
   * src="https://apis.google.com/js/api:client.js"
   */
  const googleSDK_init = () => {
    if (!window.gapi) {
      alert("Google API NOT Found");
      return;
    }

    // google API 가 활성화되고
    // 활성화된 API중에서 auth2가 loading(사용할 준비가 되면)
    window.gapi.load("auth2", async () => {
      const auth2 = await window.gapi.auth2.init({
        client_id:
          "71709386283-j70dgf0es5rsao99d5ouhk03jot8fihg.apps.googleusercontent.com",
        scope: "profile email",
      });

      if (auth2?.isSignedIn.get()) {
        console.log("로그인이 이미 된상태");
        // 원하는 곳으로 redirect
      }

      await auth2.attachClickHandler(buttonRef.current, {}, googleResponse);
    });
  };
  useEffect(googleSDK_init, [googleSDK_init]);

  const logout = (e) => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2?.disconnect();
    alert("LogOut OK!!!");
  };

  return (
    <div id="buttonWrapper">
      <div id="myGoogleBtn" ref={buttonRef}>
        <span className="icon"></span>
        <span className="buttonText">Google 로그인</span>
      </div>
      <span className="buttonText" onClick={logout}>
        Google 로그아웃
      </span>
    </div>
  );
}

export default GoogleButton;
