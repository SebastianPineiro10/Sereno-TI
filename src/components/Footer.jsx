import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-container footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Sereno TI
            </Link>

            <p>
              Desarrollo de páginas web corporativas y sistemas web
              personalizados.
            </p>
          </div>

          <div className="footer-navigation">
            <span>Navegación</span>

            <Link to="/">Inicio</Link>
            <Link to="/services">Servicios</Link>
            <Link to="/contact">Contacto</Link>
          </div>

          <div className="footer-contact">
            <span>¿Tienes un proyecto?</span>

            <Link to="/contact">
              Ver medios de contacto
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Sereno TI. Todos los derechos
            reservados.
          </p>

          <p>Soluciones digitales con claridad y propósito.</p>
        </div>
      </div>
    </footer>
  );
}