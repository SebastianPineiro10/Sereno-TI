// src/components/SideMenu.jsx
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import "./Navbar.css";

export default function SideMenu({ isOpen, toggleMenu }) {
  return (
    <div className={`side-menu-wrapper ${isOpen ? "open" : ""}`}>
      <div className="side-menu">
        <button className="close-button" onClick={toggleMenu}>
          <X size={26} />
        </button>

        <nav className="side-links">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
      </div>
      <div className="side-menu-overlay" onClick={toggleMenu}></div>
    </div>
  );
}
