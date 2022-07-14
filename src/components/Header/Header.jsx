import React from "react";
// import { Link } from "react-router-dom";
import "../Header/header.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <h1>Midas Touch</h1>
      <div className="nav">
        <div className="about-link">
          <a href="#about">About</a>
          <BsThreeDots />
        </div>
        <div className="collect-link">
          <a href="#collections">Collections</a>
          <BsThreeDots />
        </div>
        <div className="contact-link">
          <a href="#contact">Contact</a>
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default Header;
