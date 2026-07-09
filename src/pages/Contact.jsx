import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "../styles/Contact.css";

const whatsappUrl =
  "https://wa.me/526567779435?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Sereno%20TI%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20un%20proyecto.";

const emailAddress = "sebastian.bienesraices10@gmail.com";

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const resetTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        const temporaryInput = document.createElement("textarea");

        temporaryInput.value = emailAddress;
        temporaryInput.setAttribute("readonly", "");
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";

        document.body.appendChild(temporaryInput);
        temporaryInput.select();

        const copied = document.execCommand("copy");

        document.body.removeChild(temporaryInput);

        if (!copied) {
          throw new Error("No se pudo copiar el correo");
        }
      }

      setEmailCopied(true);

      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }

      resetTimerRef.current = window.setTimeout(() => {
        setEmailCopied(false);
      }, 2500);
    } catch (error) {
      console.error("No se pudo copiar el correo:", error);

      window.prompt(
        "Copia esta dirección de correo:",
        emailAddress
      );
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="page-container contact-container">
          <div className="contact-content">
            <span className="contact-eyebrow">
              Contacto
            </span>

            <h1>
              Hablemos sobre tu proyecto.
            </h1>

            <p className="contact-description">
              Cuéntanos qué necesita tu negocio, qué proceso deseas mejorar o
              qué idea quieres desarrollar. Te ayudaremos a definir una
              solución clara y adecuada.
            </p>

            <div className="contact-benefits">
              <div>
                <CheckCircle2
                  size={19}
                  aria-hidden="true"
                />

                <span>
                  Atención directa y personalizada
                </span>
              </div>

              <div>
                <CheckCircle2
                  size={19}
                  aria-hidden="true"
                />

                <span>
                  Explicación clara del proyecto
                </span>
              </div>

              <div>
                <CheckCircle2
                  size={19}
                  aria-hidden="true"
                />

                <span>
                  Soluciones adaptadas a tu negocio
                </span>
              </div>
            </div>
          </div>

          <article className="contact-card">
            <div className="contact-card-icon">
              <MessageCircle
                size={27}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <span className="contact-card-label">
              Medios de contacto
            </span>

            <h2>
              Iniciemos una conversación.
            </h2>

            <p>
              Comparte una breve explicación de tu proyecto. No es necesario
              que tengas definidos todos los detalles.
            </p>

            <div className="contact-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-button"
                aria-label="Contactar a Sereno TI por WhatsApp"
              >
                <FaWhatsapp
                  size={21}
                  aria-hidden="true"
                />

                <span>
                  WhatsApp
                </span>

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </a>

              <button
                type="button"
                className={`contact-email-button ${
                  emailCopied ? "contact-email-button--copied" : ""
                }`}
                onClick={copyEmail}
                aria-label={
                  emailCopied
                    ? "Correo copiado"
                    : `Copiar correo ${emailAddress}`
                }
              >
                {emailCopied ? (
                  <Check
                    size={20}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                ) : (
                  <Mail
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                )}

                <span aria-live="polite">
                  {emailCopied ? "Correo copiado" : "Copiar correo"}
                </span>
              </button>
            </div>

            <div className="contact-card-note">
              <CheckCircle2
                size={15}
                aria-hidden="true"
              />

              <span>
                Consulta inicial sin compromiso
              </span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

