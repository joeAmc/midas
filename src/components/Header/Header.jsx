import React from "react";
import "../Header/header.css";
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" />
    </div>
  );
};

export default Header;
