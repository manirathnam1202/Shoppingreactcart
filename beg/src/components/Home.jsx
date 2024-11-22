import React, { useState } from 'react';
import data from '../assets/products.json'; // Adjust path if necessary
import { Product } from './Product';
import "./Home.css";

function Home({cart,setCart}) {
  const [products] = useState(data.products); // Assuming `data` is an array of products

  return (
    <div className="product-container">
      {products.map((product) => (
        // <div key={product.id}>
        //   <h3>{product.name}</h3>
        //   <p>{product.description}</p>
        //   <img src={product.image} alt={product.name} width="100" />
        //   <p>Stock: {product.stock}</p>
        // </div>
        <Product key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default Home;
