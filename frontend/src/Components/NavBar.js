import React, { useState } from "react";

import image from "../img/navbar.png";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const seeMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="md:flex md:items-center md:justify-between text-sky-600  shadow ">
      <div className="">
        <img
          className="h-10 inline mx-2"
          src={image}
          alt="Imagenes Criptomonedas"
        />
        <h4 className="text-xs mx-10 ">CRYPTOCURRENCY EXCHANGE</h4>
        <span
          onClick={seeMenu}
          className="cursor-pointer text-3xl md:hidden block text-center absolute top-0 right-3"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </span>
      </div>

      <ul
        className={
          menu
            ? "hidden md:flex md:items-center  justify-center items-center flex-col md:flex-row"
            : "md:flex md:items-center flex justify-center items-center flex-col md:flex-row"
        }
      >
        <li className="mx-8 my-6 md:my-0 text-xl">Home</li>
        <li className="mx-8 my-6 md:my-0 text-xl">About Us</li>
        <li className="mx-8 my-6 md:my-0 text-xl">Analytics</li>

        <li className="md:left-10">
          <div className="  rounded-xl p-2 hidden md:inline ">
            <ion-icon className="bg-gray-600" name="moon-outline"></ion-icon>
          </div>
          <button
            className="bg-sky-600 text-white px-6 py-2 mx-20 rounded-xl
        hover:bg-sky-700 transition-color"
          >
            Sign in
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
