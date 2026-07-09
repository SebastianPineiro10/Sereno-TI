import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import "../styles/Navbar.css";

const logoUrl =
  "https://res.cloudinary.com/dcerhiol0/image/upload/v1768368163/a-luxury-minimalist-wordmark-logo-featur_Hzr1pr99QyqRMrcHBV32lw_acwahrCWScm6PFAw3X0qQA-Photoroom_xypr4p.png";

const navigationLinks = [
  {
    to: "/",
    label: "Inicio",
    end: true,
  },
  {
    to: "/services",
    label: "Servicios",
  },
  {
    to: "/contact",
    label: "Contacto",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarRef = useRef(null);
  const location = useLocation();

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
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((currentValue) => !currentValue);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      ref={navbarRef}
      className={[
        "navbar",
        scrolled ? "navbar--scrolled" : "",
        menuOpen ? "navbar--open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="navbar-shell">
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

          <nav
            className="navbar-links"
            aria-label="Navegación principal"
          >
            {navigationLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive
                    ? "navbar-link navbar-link--active"
                    : "navbar-link"
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            <Link to="/contact" className="navbar-cta">
              <span>Hablemos</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

            <button
              type="button"
              className="navbar-menu-button"
              onClick={toggleMenu}
              aria-label={
                menuOpen
                  ? "Cerrar menú de navegación"
                  : "Abrir menú de navegación"
              }
              aria-expanded={menuOpen}
              aria-controls="navbar-mobile-menu"
            >
              {menuOpen ? (
                <X size={23} strokeWidth={1.7} />
              ) : (
                <Menu size={23} strokeWidth={1.7} />
              )}
            </button>
          </div>
        </div>

        <div
          id="navbar-mobile-menu"
          className="navbar-dropdown"
          aria-hidden={!menuOpen}
        >
          <div className="navbar-dropdown-header">
            <span>Navegación</span>

            <ChevronDown
              size={17}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </div>

          <nav
            className="navbar-dropdown-links"
            aria-label="Navegación móvil"
          >
            {navigationLinks.map(({ to, label, end }, index) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "navbar-dropdown-link navbar-dropdown-link--active"
                    : "navbar-dropdown-link"
                }
              >
                <span className="navbar-dropdown-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{label}</span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}