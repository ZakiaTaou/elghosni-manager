import React, { useState } from "react";
import { useStore } from "../store/useStore";

function Products() {
  const { products, addProduct, updateProduct, deleteProduct } = useStore();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };

  const handleSubmit = async () => {
    if (!name || !price) return alert("Remplir tous les champs");

    let imageBase64 = "../assets/logo.png";
    if (imageFile) imageBase64 = await fileToBase64(imageFile);

    if (editingId) {
      updateProduct(editingId, {
        name,
        price: Number(price),
        image: imageBase64,
      });
      setEditingId(null);
    } else {
      addProduct({
        id: Date.now(),
        name,
        price: Number(price),
        image: imageBase64,
      });
    }

    setName("");
    setPrice("");
    setImageFile(null);
    document.querySelector('input[type="file"]').value = "";
  };

  const handleEdit = (p) => {
    setEditingId(p.id);
    setName(p.name);
    setPrice(p.price);
    
  };

  return (
    <div>
      <div className="form-container-p">
        <h2 className="section-title">Produits</h2>
        <div className="form-group">
          <input
            placeholder="Nom du produit"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Prix (DH)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <div className="btn-container">
            <button onClick={handleSubmit} className="btn-confirm">
              {editingId ? "Modifier" : "Ajouter"}
            </button>
          </div>
        </div>
      </div>

      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} className="product-image" />
            <h3>{p.name}</h3>
            <p>{p.price} DH</p>
            <div className="actions">
              <button className="edit" onClick={() => handleEdit(p)}>Éditer</button>
              <button className="delete" onClick={() => deleteProduct(p.id)}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
