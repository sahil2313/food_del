import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart  , getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <div className={styles.cart}>
      <div className={styles.cartItems}>
        <div className={styles.cartItemsTitle}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id]) {
            return (
              <div  key={index}>
                <div
                  className={`${styles.cartItemsTitle} ${styles.cartItemsItem}`}   
                >
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className={styles.cross}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className={styles.cartBottom}>
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
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className={styles.cartPromoCode}>
          <div>
            <p>If you have promo code, Enter it here</p>
            <div className={styles.cartPromoCodeInput}>
              <input type="text"  placeholder="promo code"/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
