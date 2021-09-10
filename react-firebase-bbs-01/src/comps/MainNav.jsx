import React from "react";
import "../css/MainNav.css";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <ul className="main_nav">
      <li>
        <NavLink exact to="/" activeClassName="active_nav">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/write" activeClassName="active_nav">
          글쓰기
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/login" activeClassName="active_nav">
          로그인
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/join" activeClassName="active_nav">
          회원가입
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
