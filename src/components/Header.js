import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <div className="navBar">
      <NavLink style={linkStyle} to={"/"}>
        Dashboard
      </NavLink>
      <NavLink style={linkStyle} to={"/project"}>
        Projects
      </NavLink>
    </div>
  );
}

const linkStyle = {
  padding: "20px",
  linkStyle: "none",
  textDecoration: "none",
};

export default Header;
