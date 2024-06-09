import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isActive , setIsActive] = useState("")

  return <div className={styles.sidebar}>
<div className={styles.sidebarOptions}>
  <NavLink to='/add' onClick={()=> setIsActive("add")} className={`${styles.sidebarOption} ${isActive === "add" ? styles.active : ""}`} >
    <img src={assets.add_icon} alt="" />
    <p>Add Items</p>
  </NavLink>
  <NavLink to='/list' onClick={()=> setIsActive("list")} className={`${styles.sidebarOption} ${isActive === "list" ? styles.active : ""}`}>
    <img src={assets.order_icon} alt="" />
    <p>List Items</p>
  </NavLink>
  <NavLink to='/orders' onClick={()=> setIsActive("orders")} className={`${styles.sidebarOption} ${isActive === "orders" ? styles.active : ""}`}>
    <img src={assets.order_icon} alt="" />
    <p>Orders</p>
  </NavLink>
</div>

  </div>;
};

export default Sidebar;

