import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import OrderList from "./components/OrderList";
import NavBar from "./components/NavBar";
import { OrderProvider } from "./context/OrderContext";
import "./App.css";

function App() {
  return (
    <OrderProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/listCommand" element={<OrderList />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
