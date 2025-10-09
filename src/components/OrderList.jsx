import React, { useState } from "react";

function OrderList() {
  const [commandes, setCommandes] = useState([
    {
      id: 1,
      nomClient: "Zakia Taoufik",
      telephone: "06 12 34 56 78",
      produits: "Huile Vierge",
      total: "150 DH",
      date: "09/10/2025",
      statut: "Livrée",
    },
    {
      id: 2,
      nomClient: "Imane Samira",
      telephone: "06 45 78 12 90",
      produits: "Miel Naturel",
      total: "120 DH",
      date: "08/10/2025",
      statut: "En cours",
    },
  ]);

  // ---- حالات (states) ديال الـ popup ----
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showModifyPopup, setShowModifyPopup] = useState(false);

  const [commandeToDelete, setCommandeToDelete] = useState(null);
  const [commandeToModify, setCommandeToModify] = useState(null);
  const [newStatus, setNewStatus] = useState(""); // الحالة الجديدة اللي يختارها المستخدم

  // ---- Supprimer ----
  const handleSupprimer = (id) => {
    setCommandeToDelete(id);
    setShowDeletePopup(true);
  };

  const confirmDelete = () => {
    setCommandes(commandes.filter((c) => c.id !== commandeToDelete));
    setShowDeletePopup(false);
    setCommandeToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
    setCommandeToDelete(null);
  };

  // ---- Modifier ----
  const handleModifier = (id) => {
    setCommandeToModify(id);
    setShowModifyPopup(true);
  };

  const confirmModify = () => {
    setCommandes(
      commandes.map((c) =>
        c.id === commandeToModify ? { ...c, statut: newStatus } : c
      )
    );
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
          {commandes.map((cmd) => (
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
                <button
                  className="btn edit"
                  onClick={() => handleModifier(cmd.id)}
                >
                  Modifier
                </button>
                <button
                  className="btn delete"
                  onClick={() => handleSupprimer(cmd.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ---- POPUP DELETE ---- */}
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

      {/* ---- POPUP MODIFY ---- */}
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
