import React from "react";

const OrderForm = () => {

  return (
    <div className="form-container">
      <h2 className="section-title">Informations du client</h2>

      <div className="form-row">
        <div className="form-group">
          <label>Nom du client <sup>*</sup></label>
          <input
            type="text"
            placeholder="Entrez le nom du client"
          />
        </div>

        <div className="form-group">
          <label>Numéro de téléphone <sup>*</sup></label>
          <input for 
            type="text"
            placeholder="Ex: 06 66 66 66 66"
            
          />
        </div>
      </div>

      <h2 className="section-title">Sélection des produits</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          
        />
      </div>
    </div>
  );
}


export default OrderForm;
