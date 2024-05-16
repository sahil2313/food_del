import React from 'react'
import styles from "./FoodItem.module.css"
import { assets } from '../../assets/assets'


const FoodItem = ({id , name , price , description , image}) => {

  return (
    <div className={styles.foodItem}>
      <div className={styles.foodItemImgContainer}>
        <img className={styles.foodItemImage} src={image} alt="" />
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
