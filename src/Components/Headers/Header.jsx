import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="contenedor-nav">
      <nav className="nav">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/Reservas">Reserva</Link>
        </p>
        <p>
          <Link to="/Ubicacion">Ubicacion</Link>
        </p>
      </nav>
    </div>
  );
};

export default Header;
