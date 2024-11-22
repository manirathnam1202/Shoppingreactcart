import React from 'react';
import { useState,useEffect } from 'react';
import "./Cart.css";

function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc + parseFloat(curr.price),0));
  },[cart])  ;            //using useEffect hook whenever there is change in cart
  
  return (
    <>
      <h1>Cart Products</h1>
      <div className="cart-container">
        {
          cart.map((product) => (
            <div className="cart-product" key={product.id}> 
              <div className="img">
                <img src={product.image} alt="image" />
              </div>
              <div className="cart-product-details">
                <h3>{product.name}</h3>
                <p>Price Rs.{product.price}</p>
              </div>
            </div>
          ))
        }
      </div>
      <h2 className="cart-amt">Total Amount Rs:{total}</h2>
    </>
  );
};

export default Cart;
