import React, { useContext } from 'react'
import styles from "./PlaceOrder.module.css"
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className={styles.placeOrder}>
      <div className={styles.placeOrderLeft}>
        <p className={styles.title}>Delivery Information</p>
        <div className={styles.multiFields}>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className={styles.multiFields}>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className={styles.multiFields}>
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className={styles.placeOrderRight}>
      <div className={styles.cartTotal}>
          <h2>Cart Totals</h2>
          <div>
            <div className={styles.cartTotalDetails}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles.cartTotalDetails}>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() > 0 ? 2 : 0}</p>
            </div>
            <hr />
            <div className={styles.cartTotalDetails}>
              <b>Total</b>
              <b>${getTotalCartAmount() > 0 ? getTotalCartAmount() + 2 : getTotalCartAmount()}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
