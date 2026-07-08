import { ArrowRight, Check } from "lucide-react";

import { servicesData } from "../data/servicesData";
import "../styles/Services.css";

const whatsappUrl =
  "https://wa.me/526567779435?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20web%20de%20Sereno%20TI.";

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="page-container services-hero-container">
          <span className="services-eyebrow">Servicios Sereno TI</span>

          <h1>Soluciones web creadas alrededor de tu negocio.</h1>

          <p>
            Diseñamos páginas corporativas y sistemas web personalizados para
            ayudarte a presentar tus servicios, organizar tu información y
            mejorar la operación de tu negocio.
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="page-container">
          <div className="services-grid">
            {servicesData.map(
              ({ id, number, title, description, benefits, images }) => (
                <article key={id} className="service-box">
                  <div className="service-box-top">
                    <span className="service-number">{number}</span>

                    <div className="service-icons">
                      {images.map((image) => (
                        <img
                          key={image.src}
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="service-content">
                    <h2>{title}</h2>

                    <p>{description}</p>

                    <ul>
                      {benefits.map((benefit) => (
                        <li key={benefit}>
                          <Check
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                          />

                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="services-information">
        <div className="page-container services-information-container">
          <div>
            <span className="section-eyebrow">
              Desarrollo personalizado
            </span>

            <h2>
              No necesitas saber qué tecnología requiere tu proyecto.
            </h2>
          </div>

          <div>
            <p>
              Cuéntanos qué necesita tu negocio o qué proceso deseas mejorar.
              En Sereno TI te ayudamos a organizar la idea, definir las
              funciones principales y desarrollar una solución web adecuada.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orientación sobre servicios web por WhatsApp"
            >
              Solicitar orientación
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}