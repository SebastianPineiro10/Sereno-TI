import { ArrowRight, Check } from "lucide-react";

import { servicesData } from "../data/servicesData";
import "../styles/Services.css";

const whatsappUrl =
  "https://wa.me/526567779435?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Sereno%20TI.";

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="page-container services-hero-container">
          <span className="services-eyebrow">Servicios Sereno TI</span>

          <h1>Soluciones digitales creadas alrededor de tu negocio.</h1>

          <p>
            Diseñamos y desarrollamos herramientas profesionales para ayudarte
            a presentar, organizar y hacer crecer tu operación.
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
                          <Check size={16} strokeWidth={2} />
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
            <span className="section-eyebrow">Proyectos personalizados</span>

            <h2>No necesitas saber exactamente qué tecnología utilizar.</h2>
          </div>

          <div>
            <p>
              Puedes contarnos el problema que deseas resolver o la idea que
              tienes. Nosotros te ayudamos a organizar las funciones y definir
              una solución adecuada.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orientación
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}