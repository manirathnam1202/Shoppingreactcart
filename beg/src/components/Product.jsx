import React from 'react'
import './product.css';
export const Product = ({product,cart,setCart}) => {
  const name=product.name.length>20?product.name.substring(0,20)+".." : product.name;

  const addCart=()=>{
    setCart([...cart,product]);
  };
  const removeCart=()=>{
    setCart(cart.filter((c)=>c.id!==product.id));
  };

  return (
    <div className="product">
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details">
      <h3>{name}</h3>
      <p>Price Rs : {product.price}</p>
      {
        cart.includes(product)?(
          <button className="btnRemove" onClick={removeCart}>Remove from Cart</button>
        ):(
          <button onClick={addCart}>Add to Cart</button>
        )
      }
      </div>
    </div>
  )
}
