import React, { useState } from "react";
import { useStore } from "../store/useStore";

function OrderList() {
  const { orders, updateOrder, deleteOrder } = useStore();
  const [modifyId, setModifyId] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  const handleModify = (id) => setModifyId(id);
  const confirmModify = () => {
    if (!newStatus) return alert("Choisissez un statut !");
    updateOrder(modifyId, { statut: newStatus });
    setModifyId(null);
    setNewStatus("");
  };

  return (
    <div className="orders-container">
      <h2>Liste des commandes</h2>
      {orders.length === 0 ? <p>Aucune commande</p> : (
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Client</th><th>Produits</th><th>Total</th><th>Date</th><th>Statut</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.nomClient}</td>
                <td>{o.produits}</td>
                <td>{o.total} DH</td>
                <td>{o.date}</td>
                <td>{o.statut}</td>
                <td>
                  <button onClick={() => handleModify(o.id)}>Modifier</button>
                  <button onClick={() => deleteOrder(o.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {modifyId && (
        <div>
          <select value={newStatus} onChange={e => setNewStatus(e.target.value)}>
            <option value="">--Choisir--</option>
            <option value="En cours">En cours</option>
            <option value="Livrée">Livrée</option>
            <option value="Annuler">Annuler</option>
          </select>
          <button onClick={confirmModify}>Valider</button>
        </div>
      )}
    </div>
  );
}

export default OrderList;
