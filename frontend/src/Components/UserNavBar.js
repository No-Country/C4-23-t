import React, { useState, useEffect } from "react";
import oldGreenlogo from "../Assets/greenOldManLogo.svg";
import messageLogo from "../Assets/messageLogo.svg";
import "../CSS/UserNavBar.css";

export default function () {

  return (
    <nav className="userHeader">
      <h1 className="userHeaderTItle">Neocoin</h1>
      <img src={messageLogo} alt="asd" className="messageLogo" />
      <img src={oldGreenlogo} alt="asd" className="userLogo" />
    </nav>
  );
}
