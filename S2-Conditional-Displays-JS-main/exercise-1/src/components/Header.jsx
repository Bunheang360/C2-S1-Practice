import React from "react";
import pnLogo from "../assets/pn-logo.png"; 

const Header = ({ title, batchName }) => {
  return (
    <header id="header">
      <img src={pnLogo} alt="PN Logo" />
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
        <h2 className="text-lg">{batchName}</h2>
      </div>
    </header>
  );
};

export default Header;
