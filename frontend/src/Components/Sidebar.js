import React, { useState } from "react";
import image from "../Assets/neocoin_logo.png";
import home from "../Assets/Icon1.svg";
import wallet from "../Assets/Wallet.svg";
import swap from "../Assets/swap.svg";
import profile from "../Assets/profile.svg";
import seetings from "../Assets/setting.svg";
import logout from "../Assets/logout.svg";
import { Link, Navigate } from "react-router-dom";
import "../CSS/Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/actions/authActions";
import "../CSS/TextImage.css";
import { HamburgerIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const Sidebar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleSignOut = () => {
    dispatch(signOut());
    if (auth.token == null) return <Navigate to="/" />;
  };
  const [ver, setVer] = useState(false);
  return (
    <>
      <botton
        className="absolute right-1  top-6 md:hidden boton"
        onClick={() => {
          setVer(!ver);
        }}
      >
        {ver ? (
          <ChevronLeftIcon boxSize={35} />
        ) : (
          <HamburgerIcon boxSize={34} />
        )}
      </botton>
      <nav className={ver ? "sidebar  " : "sidebar mostrar z-30 "}>
        <div className="image">
          <img className="imageLogo" src={image} alt="Imagenes Criptomonedas" />
        </div>

        <ul className="menuSidebar">
          <Link to={"/private"}>
            <li>
              <div className="icon">
                <img src={home} alt="Icono Home" />
              </div>
              <h4>Home</h4>
            </li>
          </Link>

          <Link to={"/private/wallet"}>
            <li>
              <div className="icon">
                <img src={wallet} alt="Icono Home" />
              </div>
              <h4>Wallet</h4>
            </li>
          </Link>

          <Link to={"/private/swap"}>
            <li>
              <div className="icon">
                <img src={swap} alt="Icono Home" />
              </div>
              <h4>Swap</h4>
            </li>
          </Link>

          {/*    <Link to={"/private/profile"}>
            <li>
              <div className=icon}>
                <img src={profile} alt="Icono Home" />
              </div>
              <h4>Profile</h4>
            </li>
          </Link> */}

          <Link to={"/private/settings"}>
            <li>
              <div className="icon">
                <img src={seetings} alt="Icono Home" />
              </div>
              <h4>Setting</h4>
            </li>
          </Link>
          <li>
            <button style={{ display: "row" }} onClick={() => handleSignOut()}>
              <div className="icon">
                <img src={logout} alt="Icono Home" />
              </div>
            </button>
            <h4>Logout</h4>
          </li>
        </ul>
        <div className="contentDarckLight">
          <h3 className="darcklight">Switch Dark/ light Theme</h3>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
