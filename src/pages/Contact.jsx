// src/pages/Contact.jsx
import { FaWhatsapp } from "react-icons/fa";
import "../styles/Contact.css/"

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-title">¿Listo para transformar tu proyecto?</h2>
      <p className="contact-subtitle">
        Trabajemos juntos en tu próxima solución tecnológica a medida.
      </p>

      <a
        href="https://wa.me/526567779435" // Reemplaza por tu número real
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp size={24} />
        <span>Contáctanos por WhatsApp</span>
      </a>
    </section>
  );
}
