import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<><OrderForm /> <ProductList /></>} />
        <Route path="/listCommand" element={<OrderList />} />
      </Routes>
    </Router>
  );
}

export default App;
