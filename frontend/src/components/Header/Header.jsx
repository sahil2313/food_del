import React from 'react'
import styles from "./Header.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.headerContents}>
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a dectable array of dishes crafted with the finest ingrediants and culinary expertise.
                Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.
            </p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header
