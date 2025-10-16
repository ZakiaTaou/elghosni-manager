import React from "react";
import { useStore } from "../store/useStore";

function Dashboard() {
  const { orders, products } = useStore();
  const totalOrders = orders.length;
  const totalProducts = products.length;
  const totalRevenue = orders.reduce((sum, o) => sum + parseInt(o.total || 0), 0);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total commandes: {totalOrders}</p>
      <p>Total produits: {totalProducts}</p>
      <p>Chiffre d'affaire: {totalRevenue} DH</p>
    </div>
  );
}

export default Dashboard;
