import React, { useContext } from 'react'
import styles from "./FoodDisplay.module.css"
import { StoreCotext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreCotext)
  return (

    <div className={styles.foodDisplay} id='food_display'>
        <h2>Top dishes near you</h2>
        <div className={styles.foodDisplayList}>
        {food_list.map((item , index)=>{
            return (
                <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
            )
        })}
        </div>
    </div>
  )
}

export default FoodDisplay
