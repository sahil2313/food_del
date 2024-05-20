import React, { useContext, useState } from 'react'
import styles from "./FoodItem.module.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({id , name , price , description , image}) => {
  
        const {cartItems , addToCart , removeFromCart} = useContext(StoreContext)
  return (
    <div className={styles.foodItem}>
      <div className={styles.foodItemImgContainer}>
        <img className={styles.foodItemImage} src={image} alt="" />
        {
            !cartItems[id] ?
            <img  onClick={()=> addToCart(id)} className={styles.add} src={assets.add_icon_white}/> :
            <div className={styles.foodItemCounter}>
                <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className={styles.foodItemInfo}>
        <div className={styles.foodIteNameRating}>
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className={styles.foodItemDesc}>{description}</p>
        <p className={styles.foodItemPrice}>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
