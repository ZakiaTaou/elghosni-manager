import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
        Dashboard
      </NavLink>
      <NavLink to="/orders" className={({ isActive }) => isActive ? "active-link" : ""}>
        Commandes
      </NavLink>
      <NavLink to="/new-order" className={({ isActive }) => isActive ? "active-link" : ""}>
        Nouvelle Commande
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => isActive ? "active-link" : ""}>
        Produits
      </NavLink>
    </div>
  );
}

export default Sidebar;
