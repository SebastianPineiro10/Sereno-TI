// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import SideMenu from "./SideMenu";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">

          {/* LEFT — Mobile Menu */}
          <button className="menu-icon" onClick={toggleMenu} aria-label="Open menu">
            <Menu size={26} strokeWidth={1.4} />
          </button>

          {/* CENTER — Navigation */}
          <nav className="nav-links">
            <Link to="/" className={pathname === "/" ? "active" : ""}>Home</Link>
            <Link to="/services" className={pathname === "/services" ? "active" : ""}>Services</Link>
            <Link to="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
          </nav>

          {/* RIGHT — Logo */}
          <Link to="/" className="logo">
            <img
              src="https://res.cloudinary.com/dcerhiol0/image/upload/v1768368163/a-luxury-minimalist-wordmark-logo-featur_Hzr1pr99QyqRMrcHBV32lw_acwahrCWScm6PFAw3X0qQA-Photoroom_xypr4p.png"
              alt="Sereno TI"
              className="logo-img"
            />
          </Link>

        </div>
      </header>

      <SideMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
}
