import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />

      <div className="footer flex flex-col items-center justify-center">
        <div className="social-links flex">
          <img src={Github} alt="" className="m-2" />
          <img src={Instagram} alt="" className="m-2" />
          <img src={LinkedIn} alt="" className="m-2" />
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      {/* 
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div> */}
    </div>
  );
};

export default Footer;
