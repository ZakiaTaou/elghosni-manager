import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import OrderList from "./pages/OrderList";
import OrderForm from "./pages/OrderForm";
import Products from "./pages/Products";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<OrderList />} />
          <Route path="new-order" element={<OrderForm />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
