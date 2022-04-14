import React from "react";
import image from "../Assets/neocoin_logo.png";
import home from "../Assets/Icon1.svg";
import wallet from "../Assets/Wallet.svg";
import swap from "../Assets/swap.svg";
import profile from "../Assets/profile.svg";
import seetings from "../Assets/setting.svg";
import logout from "../Assets/logout.svg";
import styles from "../CSS/Sidebar.module.css";
const Sidebar = () => {
  return (
    <>
      <nav className={styles.sidebar}>
        <div className={styles.image}>
          <img className="imageLogo" src={image} alt="Imagenes Criptomonedas" />
        </div>

        <ul className={styles.menuSidebar}>
          <li>
            <div className={styles.icon}>
              <img src={home} alt="Icono Home" />
            </div>
            <h4><a href="">Home</a></h4>
          </li>

          <li>
            <div className={styles.icon}>
              <img src={wallet} alt="Icono Home" />
            </div>
            <h4><a>Wallet</a></h4>
          </li>
          <li>
            <div className={styles.icon}>
              <img src={swap} alt="Icono Home" />
            </div>
            <h4><a>Swap</a></h4>
          </li>
          <li>
            <div className={styles.icon}>
              <img src={profile} alt="Icono Home" />
            </div>
            <h4><a>Profile</a></h4>
          </li>
          <li>
            <div className={styles.icon}>
              <img src={seetings} alt="Icono Home" />
            </div>
            <h4><a>Setting</a></h4>
          </li>
          <li>
            <div className={styles.icon}>
              <img src={logout} alt="Icono Home" />
            </div>
            <h4><a>Logout</a></h4>
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
