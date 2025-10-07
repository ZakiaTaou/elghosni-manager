import React from "react";
import ProductList from "./components/ProductList";
import "./App.css"
function App() {
  return (
    <div className="App">
      <h1 className="product-title">Nos Produits</h1>
      <ProductList />
    </div>
  );
}

export default App;
