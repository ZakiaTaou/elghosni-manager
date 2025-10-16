import React from "react";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <h1>Mon Application</h1>
    </nav>
  );
}

export default NavBar;
