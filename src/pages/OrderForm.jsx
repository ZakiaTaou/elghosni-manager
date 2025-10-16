import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

function OrderForm() {
  const { addOrder, products: storeProducts } = useStore();
  const navigate = useNavigate();
  const [client, setClient] = useState({ name: "", phone: "" });
  const [products, setProducts] = useState(storeProducts.map(p => ({ ...p, quantity: 0 })));

  const handleQuantityChange = (id, quantity) => {
    setProducts(products.map(p => p.id === id ? { ...p, quantity: Number(quantity) } : p));
  };

  const handleSubmit = () => {
    if (!client.name || !client.phone) return alert("Veuillez remplir les infos du client");
    const selectedProducts = products.filter(p => p.quantity > 0);
    if (!selectedProducts.length) return alert("Sélectionnez au moins un produit");

    const total = selectedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);
    const newOrder = {
      id: Date.now(),
      nomClient: client.name,
      telephone: client.phone,
      produits: selectedProducts.map(p => `${p.name} x${p.quantity}`).join(", "),
      total: `${total}`,
      date: new Date().toLocaleDateString(),
      statut: "En cours",
    };

    addOrder(newOrder);
    navigate("/orders");
  };

  return (
    <div>
      <div className="form-container">
        <h2 className="section-title">Informations du client</h2>

        <div className="form-group">
          <label>
            Nom du client <sup>*</sup>
          </label>
          <input
            type="text"
            placeholder="Entrez le nom du client"
            value={client.name}
            onChange={(e) => setClient({ ...client, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>
            Numéro de téléphone <sup>*</sup>
          </label>
          <input
            type="text"
            placeholder="Ex: 06 66 66 66 66"
            value={client.phone}
            onChange={(e) => setClient({ ...client, phone: e.target.value })}
          />
        </div>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p className="price">{product.price} MAD</p>
            <div className="setQuantite">
              <label>Quantité:</label>
              <input
                type="number"
                min={0}
                max={50}
                value={product.quantity}
                onChange={(e) =>
                  handleQuantityChange(product.id, e.target.value)
                }
              />
            </div>
          </div>
        ))}
      </div>
      <div className="btn-container">
        <button className="btn-confirm" onClick={handleSubmit}>
          Confirmerla commande
        </button>
      </div>
        
    </div>
  );
}

export default OrderForm;
