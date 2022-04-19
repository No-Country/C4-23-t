import React, { useState, useEffect } from "react";
import oldGreenlogo from "../Assets/greenOldManLogo.svg";
import messageLogo from "../Assets/messageLogo.svg";
import "../CSS/UserNavBar.css";

export default function () {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      setContent(document.title);
    };

    fetchData();
  }, []);

  return (
    <nav className="userHeader">
      <h1 className="userHeaderTItle">{content}</h1>
      <img src={messageLogo} alt="asd" className="messageLogo" />
      <img src={oldGreenlogo} alt="asd" className="userLogo" />
    </nav>
  );
}
