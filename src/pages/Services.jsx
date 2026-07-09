import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import { servicesData } from "../data/servicesData";
import "../styles/Services.css";

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="page-container services-hero-container">
          <span className="services-eyebrow">
            Servicios Sereno TI
          </span>

          <h1>
            Soluciones web creadas alrededor de tu negocio.
          </h1>

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
              ({
                id,
                number,
                title,
                description,
                benefits,
                images,
              }) => (
                <article key={id} className="service-box">
                  <div className="service-box-top">
                    <span className="service-number">
                      {number}
                    </span>

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

            <Link
              to="/contact"
              aria-label="Ir a contacto para solicitar orientación"
            >
              Solicitar orientación
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}