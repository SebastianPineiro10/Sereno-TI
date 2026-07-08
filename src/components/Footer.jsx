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
              Desarrollo de páginas web, aplicaciones y sistemas digitales
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
            <span>Contacto</span>

            <a
              href="https://wa.me/526567779435?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Sereno%20TI."
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
              <ArrowUpRight size={16} />
            </a>

            <a href="mailto:sebastian.bienesraices10@gmail.com">
              Correo electrónico
              <ArrowUpRight size={16} />
            </a>
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
