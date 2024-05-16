import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { assets } from "../../assets/assets";

const Navbar = () => {

  const [menu , setMenu] = useState("Home")
  return (
    <div className={styles.navbar}>
      <img src={assets.logo} alt="logo" className={styles.logo} />
      <ul className={styles.navbar_menu}>
        <li onClick={()=> setMenu("home")} className={menu === "home" ? styles.active : ""}>home</li>
        <li onClick={()=> setMenu("menu")} className={menu === "menu" ? styles.active : ""}>menu</li>
        <li onClick={()=> setMenu("mobile-app")} className={menu === "mobile-app" ? styles.active : ""}>mobile-app</li>
        <li onClick={()=> setMenu("contact us")} className={menu === "contact us" ? styles.active : ""}>contact us</li>
      </ul>
      <div className={styles.navbar_right}>
        <img src={assets.search_icon} alt="" />
        <div className={styles.navbarSearchIcon}>
            <img src={assets.basket_icon} alt="" />
            <div className={styles.dot}></div>
        </div>
        <button >sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
