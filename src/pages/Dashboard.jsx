import React from "react";
import { useStore } from "../store/useStore";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { FaBoxes,FaDollarSign } from "react-icons/fa";



function Dashboard() {
  const { orders, products } = useStore();

  return (
    <div className="dashboard-container">

      <h2 className="dashboard-title">Dashboard</h2>
    
      <div className="dashboard-cards">
        <div className="card card-orders">
          <div className="icon"><FaCartFlatbedSuitcase/></div>
          <h3>Commandes</h3>
          <p>{orders.length}</p>
        </div>

        <div className="card card-products">
          <div className="icon"><FaBoxes /></div>
          <h3>Produits</h3>
          <p>{products.length}</p>
        </div>

        <div className="card card-revenue">
          <div className="icon"><FaDollarSign /></div>
          <h3>Chiffre d'affaires</h3>
          <p>
            {orders.reduce((sum, o) => sum + parseInt(o.total || 0), 0)} DH
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
