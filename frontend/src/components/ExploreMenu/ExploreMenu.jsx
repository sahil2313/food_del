import React from 'react'
import styles from "./ExploreMenu.module.css"
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category  ,setCategory}) => {
  return (
    <div className={styles.exploreMenu} id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className={styles.exploreMenuText}>Choose from a diverse menu featuring a dectable array of dishes crafted with the finest ingrediants and culinary expertise.
                Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
        <div className={styles.exploreMenuList}>
            {menu_list.map((item , index)=>{
               return <div onClick={()=>setCategory(preValue => preValue === item.menu_name ? "All" : item.menu_name)} key={index} className={styles.exploreMenuListItem}>
                    <img className={category === item.menu_name ? styles.active : ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
