import React, { useState } from "react";
import { useStore } from "../store/useStore";

function OrderList() {
  const { orders, updateOrder, deleteOrder } = useStore();

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showModifyPopup, setShowModifyPopup] = useState(false);
  const [commandeToDelete, setCommandeToDelete] = useState(null);
  const [commandeToModify, setCommandeToModify] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  const handleSupprimer = (id) => {
    setCommandeToDelete(id);
    setShowDeletePopup(true);
  };

  const confirmDelete = () => {
    deleteOrder(commandeToDelete);
    setShowDeletePopup(false);
    setCommandeToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
    setCommandeToDelete(null);
  };

  const handleModifier = (id) => {
    setCommandeToModify(id);
    setShowModifyPopup(true);
  };

  const confirmModify = () => {
    if (!newStatus) {
      alert("Veuillez choisir un statut !");
      return;
    }
    updateOrder(commandeToModify, { statut: newStatus });
    setShowModifyPopup(false);
    setCommandeToModify(null);
    setNewStatus("");
  };

  const cancelModify = () => {
    setShowModifyPopup(false);
    setCommandeToModify(null);
    setNewStatus("");
  };

  return (
    <div className="orders-container">
      <h2 className="title">Liste des commandes</h2>

      {orders.length === 0 ? (
        <p>Aucune commande pour le moment.</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom du client</th>
              <th>Téléphone</th>
              <th>Produits</th>
              <th>Total</th>
              <th>Date</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((cmd) => (
              <tr key={cmd.id}>
                <td>{cmd.id}</td>
                <td>{cmd.nomClient}</td>
                <td>{cmd.telephone}</td>
                <td>{cmd.produits}</td>
                <td>{cmd.total}</td>
                <td>{cmd.date}</td>
                <td>
                  <span
                    className={`status ${
                      cmd.statut === "Livrée"
                        ? "status-success"
                        : cmd.statut === "En cours"
                        ? "status-pending"
                        : "status-other"
                    }`}
                  >
                    {cmd.statut}
                  </span>
                </td>
                <td className="actions">
                  <button className="btn edit" onClick={() => handleModifier(cmd.id)}>
                    Modifier
                  </button>
                  <button className="btn delete" onClick={() => handleSupprimer(cmd.id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showDeletePopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Confirmer la suppression</h3>
            <p>Voulez-vous vraiment supprimer cette commande ?</p>
            <div className="popup-buttons">
              <button className="btn delete" onClick={confirmDelete}>
                Oui, supprimer
              </button>
              <button className="btn cancel" onClick={cancelDelete}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {showModifyPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Modifier le statut</h3>
            <label htmlFor="status">Nouveau statut :</label>
            <select
              id="status"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            >
              <option value="">-- Sélectionnez --</option>
              <option value="En cours">En cours</option>
              <option value="Livrée">Livrée</option>
              <option value="Annuler">Annuler</option>
            </select>

            <div className="popup-buttons">
              <button className="btn edit" onClick={confirmModify}>
                Oui, modifier
              </button>
              <button className="btn cancel" onClick={cancelModify}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderList;
