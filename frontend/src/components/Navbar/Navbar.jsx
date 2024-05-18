import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { assets } from "../../assets/assets";
import {Link} from "react-router-dom"
const Navbar = ({setShowLogin}) => {

  const [menu , setMenu] = useState("Home")
  return (
    <div className={styles.navbar}>
      <img src={assets.logo} alt="logo" className={styles.logo} />
      <ul className={styles.navbar_menu}>
        <Link to={'/'} onClick={()=> setMenu("home")} className={menu === "home" ? styles.active : ""}>home</Link>
        <a  href="#explore-menu" onClick={()=> setMenu("menu")} className={menu === "menu" ? styles.active : ""}>menu</a>
        <a href="#mobile-app" onClick={()=> setMenu("mobile-app")} className={menu === "mobile-app" ? styles.active : ""}>mobile-app</a>
        <a href="#footer" onClick={()=> setMenu("contact us")} className={menu === "contact us" ? styles.active : ""}>contact us</a>
      </ul>
      <div className={styles.navbar_right}>
        <img src={assets.search_icon} alt="" />
        <div className={styles.navbarSearchIcon}>
            <img src={assets.basket_icon} alt="" />
            <div className={styles.dot}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
