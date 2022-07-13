import React from "react";
// import { Link } from "react-router-dom";
import "../Header/header.css";
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" />
      <div className="nav">
        <a href="">About</a>
        <a href="">Collections</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
};

export default Header;
