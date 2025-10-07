import React from "react";
import products from "../data/products";

const ProductList = () => {
  return (
    
    <div className="product-list">

      {products.map((product) => (

        <div key={product.id} className="product-card">
        
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">{product.price} MAD</p>
          <button className="btn-add">Ajouter au panier</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
