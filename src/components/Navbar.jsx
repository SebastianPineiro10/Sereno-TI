import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import SideMenu from "./SideMenu";
import "../styles/Navbar.css";

const logoUrl =
  "https://res.cloudinary.com/dcerhiol0/image/upload/v1768368163/a-luxury-minimalist-wordmark-logo-featur_Hzr1pr99QyqRMrcHBV32lw_acwahrCWScm6PFAw3X0qQA-Photoroom_xypr4p.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            aria-label="Ir al inicio de Sereno TI"
            onClick={closeMenu}
          >
            <img
              src={logoUrl}
              alt="Sereno TI"
              className="navbar-logo-image"
            />
          </Link>

          <nav className="navbar-links" aria-label="Navegación principal">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Servicios
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Contacto
            </NavLink>
          </nav>

          <Link to="/contact" className="navbar-cta">
            Hablemos
          </Link>

          <button
            type="button"
            className="navbar-menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <Menu size={26} strokeWidth={1.7} />
          </button>
        </div>
      </header>

      <SideMenu isOpen={menuOpen} closeMenu={closeMenu} />
    </>
  );
}