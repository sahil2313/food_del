import React, { useState } from 'react'
import styles from "./Home.module.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = () => {
  const [category , setCategory]= useState("All")
  return (
    <div className={styles.home}>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
