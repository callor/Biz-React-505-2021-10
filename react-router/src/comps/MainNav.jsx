import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Navigation menu 설정할때
 * Link 또는 NavLink 컴포넌트를 사용한다
 *
 * NavLink를 사용하면
 * NavLink에 의해 활성화된 페이지가 열리면
 * menu stype을 지정하여 어떤 메뉴가 활성화 된 것인지를
 * 표현할수 있다
 * activeStyle={스타일변수}
 * activeClassName="클래스명"
 *
 */
function MainNav() {
  // 컴포넌트 코드에 inline style 생성
  const activeNavStyle = {
    backgroundColor: "green",
  };
  return (
    <ul className="main_menu">
      <li>
        <NavLink to="/" activeStyle={activeNavStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activeNavStyle}>
          나의 소개
        </NavLink>
      </li>
      <li>
        <NavLink to="/bbs" activeStyle={activeNavStyle}>
          자유게시판
        </NavLink>
      </li>
      <li>
        <input placeholder="검색어를 입력하세요" />
      </li>
    </ul>
  );
}

export default MainNav;
