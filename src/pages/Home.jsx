// src/pages/Home.jsx
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Sereno TI</h1>
          <p className="hero-subtitle">
            Arquitectura de software, plataformas empresariales y soluciones
            tecnológicas de alto nivel para empresas que no pueden fallar.
          </p>

          <a
            href="https://wa.me/526567779435"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Solicitar demostración
          </a>
        </div>
      </section>

      <section className="services-preview">
        <div className="service-card">
          <h3>Plataformas Web</h3>
          <p>
            Sistemas empresariales conectados a PostgreSQL, MongoDB y Firebase,
            diseñados para escalar y mantenerse estables.
          </p>
        </div>

        <div className="service-card">
          <h3>Apps Móviles</h3>
          <p>
            Aplicaciones nativas de alto rendimiento construidas con React
            Native y Expo para Android e iOS.
          </p>
        </div>

        <div className="service-card">
          <h3>Infraestructura</h3>
          <p>
            Arquitectura, automatización, paneles administrativos y soporte
            técnico continuo para empresas.
          </p>
        </div>
      </section>
    </main>
  );
}
