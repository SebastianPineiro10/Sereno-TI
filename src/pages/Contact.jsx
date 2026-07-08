import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "../styles/Contact.css";

const whatsappUrl =
  "https://wa.me/526567779435?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Sereno%20TI%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20un%20proyecto.";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="page-container contact-container">
          <div className="contact-content">
            <span className="contact-eyebrow">Hablemos de tu proyecto</span>

            <h1>
              Convierte tu idea en una solución digital profesional.
            </h1>

            <p className="contact-description">
              Cuéntanos qué necesitas, qué problema deseas resolver o qué
              proceso quieres mejorar. Te ayudaremos a identificar una solución
              adecuada para tu proyecto.
            </p>

            <div className="contact-benefits">
              <div>
                <CheckCircle2 size={19} />
                <span>Atención directa y personalizada</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Explicación clara del alcance del proyecto</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Soluciones adaptadas a tus necesidades</span>
              </div>
            </div>
          </div>

          <article className="contact-card">
            <div className="contact-card-icon">
              <MessageCircle size={27} strokeWidth={1.7} />
            </div>

            <span className="contact-card-label">Contacto directo</span>

            <h2>Comencemos con una conversación.</h2>

            <p>
              Escríbenos por WhatsApp y comparte una breve explicación de tu
              idea. No es necesario que tengas definidos todos los detalles.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-button"
            >
              <FaWhatsapp size={21} />
              <span>Contactar por WhatsApp</span>
              <ArrowRight size={18} />
            </a>

            <div className="contact-card-note">
              <CheckCircle2 size={15} />
              <span>Consulta inicial sin compromiso</span>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-alternative">
        <div className="page-container contact-alternative-container">
          <div className="contact-alternative-icon">
            <Mail size={22} strokeWidth={1.7} />
          </div>

          <div>
            <span>También puedes escribirnos por correo</span>

            <a href="mailto:sebastian.bienesraices10@gmail.com">
              sebastian.bienesraices10@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
