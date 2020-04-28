import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink to="/">Home
      </NavLink>
      {" | "} 
      <NavLink to="/courses">Courses
      </NavLink>
      {" | "} 
      <NavLink to="/about">About
      </NavLink>
    </nav>
  );
}
export default Header;
