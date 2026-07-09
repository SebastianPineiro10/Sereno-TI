import { Link, NavLink } from "react-router-dom";
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
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <nav className="side-menu-links">
          <NavLink to="/" end onClick={closeMenu}>
            <span>Inicio</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            <span>Servicios</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            <span>Contacto</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </NavLink>
        </nav>

        <div className="side-menu-footer">
          <p>
            Soluciones web diseñadas alrededor de las necesidades de tu
            negocio.
          </p>

          <Link to="/contact" onClick={closeMenu}>
            Conocer medios de contacto
          </Link>
        </div>
      </aside>
    </div>
  );
}