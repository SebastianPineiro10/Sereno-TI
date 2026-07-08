import { NavLink } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";

import "../styles/Navbar.css";

export default function SideMenu({ isOpen, closeMenu }) {
  return (
    <div
      className={`side-menu-wrapper ${isOpen ? "open" : ""}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="side-menu-overlay"
        onClick={closeMenu}
        aria-label="Cerrar menú"
      />

      <aside className="side-menu" aria-label="Menú móvil">
        <div className="side-menu-header">
          <span>Sereno TI</span>

          <button
            type="button"
            className="side-menu-close"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="side-menu-links">
          <NavLink to="/" end onClick={closeMenu}>
            <span>Inicio</span>
            <ArrowUpRight size={20} />
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            <span>Servicios</span>
            <ArrowUpRight size={20} />
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            <span>Contacto</span>
            <ArrowUpRight size={20} />
          </NavLink>
        </nav>

        <div className="side-menu-footer">
          <p>
            Soluciones digitales diseñadas para las necesidades de tu negocio.
          </p>

          <a
            href="https://wa.me/526567779435?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Sereno%20TI%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </aside>
    </div>
  );
}