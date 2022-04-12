import React, { useState } from "react";
import image from "../../Assets/neocoin_logo.png";
import home from "../../Assets/Icon1.svg";
import wallet from "../../Assets/Wallet.svg";
import swap from "../../Assets/swap.svg";
import profile from "../../Assets/profile.svg";
import seetings from "../../Assets/setting.svg";
import logout from "../../Assets/logout.svg";
import styles from "./Sidebar.module.css";



const Sidebar = () => {
  const [menu, setMenu] = useState(true);

  const seeMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <nav className={menu?styles.sidebarIn:styles.sidebarOut}>
        <div className={styles.image}>
          <div className={styles.hamburger} onClick={seeMenu}>p</div>
          <img className="imageLogo" src={image} alt="Imagenes Criptomonedas" />
        </div>

        <ul className={styles.menuSidebar}>
          <li>
            <div className={styles.icon}>
              <img src={home} alt="Icono Home" />
            </div>
            <h4>Home</h4>
          </li>

          <li>
            <div className={styles.icon}>
              <img src={wallet} alt="Icono Home" />
            </div>
            <h4>Wallet</h4>
          </li>
          <li>
            <div className={styles.icon}>
              <img src={swap} alt="Icono Home" />
            </div>
            <h4>Swap</h4>
          </li>
          <li>
            <div className={styles.icon}>
              <img src={profile} alt="Icono Home" />
            </div>
            <h4>Profile</h4>
          </li>
          <li>
            <div className={styles.icon}>
              <img src={seetings} alt="Icono Home" />
            </div>
            <h4>Seeting</h4>
          </li>
          <li>
            <div className={styles.icon}>
              <img src={logout} alt="Icono Home" />
            </div>
            <h4>Logout</h4>
          </li>
        </ul>
        <div className={styles.contentDarckLight}>
          <h3 className={styles.darcklight}>Switch Dark/ light Theme</h3>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
