import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png"

function NavBar() {
  return (
    
    <nav className="navbar">
      
        <img className="logo"
            src={logo}
            alt="logo"
          />
        <div className="nav-links">
          <Link to="/" className="link">Produits</Link>
          <Link to="/newCommand" className="link">Nouvelle Commande</Link>
          <Link to="/listCommand" className="link">Commandes</Link>
        </div>
     
    </nav>
  );
}

export default NavBar;