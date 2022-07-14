import React from "react";
// import { Link } from "react-router-dom";
import "../Header/header.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="nav">
        <a href="#about">About</a>
        <a href="#collections">Collections</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
