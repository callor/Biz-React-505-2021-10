import React from "react";
import MainNav from "./MainNav";
import LoginForm from "./LoginForm";
import JoinForm from "./JoinForm";
import Notice from "./Notice";
import BBs from "./BBs";
import Logout from "./Logout";
import { Route } from "react-router-dom";
import Admin from "./Admin";
import AuthRoute from "./AuthRoute";

import { useUserContext } from "../context/UserContextProvider";

function MainComp() {
  const { user, setUser } = useUserContext();

  const NavList = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "공지사항", link: "/notice" },
    { id: 2, title: "자유게시판", link: "/bbs" },
    user?.userid
      ? { id: 3, title: "로그아웃", link: "/logout", align: true }
      : { id: 3, title: "로그인", link: "/login", align: true },
    user?.userid
      ? { id: 4, title: "마이페이지", link: "/mypage" }
      : { id: 4, title: "회원가입", link: "/join" },
    { id: 5, title: "회원정보보기", link: "/admin" },
  ];

  return (
    <MainNav NavList={NavList}>
      <Route path="/" exact>
        <div>홈화면</div>
      </Route>

      <Route path="/notice" exact>
        <AuthRoute>
          <Notice />
        </AuthRoute>
      </Route>
      <Route path="/bbs" exact>
        <AuthRoute>
          <BBs />
        </AuthRoute>
      </Route>
      <Route path="/login" exact>
        <LoginForm />
      </Route>
      <Route path="/join">
        <JoinForm />
      </Route>
      <Route path="/logout" exact>
        <Logout />
      </Route>
      <Route path="/admin" exact>
        <AuthRoute>
          <Admin role={user.role} />
        </AuthRoute>
      </Route>
    </MainNav>
  );
}

export default MainComp;
