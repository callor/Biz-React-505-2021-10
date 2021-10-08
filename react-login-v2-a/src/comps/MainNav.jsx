import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "../css/MainNav.css";

const aligh_right = {
  marginLeft: "auto",
};
function MainNav({ children, NavList }) {
  const nav_items = NavList.map((nav) => {
    return (
      <li className="nav_item" key={nav.id} style={nav.align && aligh_right}>
        <NavLink to={nav.link}>{nav.title}</NavLink>
      </li>
    );
  });

  return (
    <BrowserRouter>
      <ul className="nav">{nav_items}</ul>
      {children}
    </BrowserRouter>
  );
}

export default MainNav;
