// src/pages/Home.jsx
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Sereno TI</h1>
        <p className="hero-subtitle">
          Sistemas personalizados. Infraestructura sólida. Elegancia funcional.
        </p>
        <a
          href="https://wa.me/526567779435"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Solicita una demo
        </a>
      </section>

      <section className="services-preview">
        <div className="service-card">
          <h3>Sistemas Web</h3>
          <p>Conexión avanzada con PostgreSQL, Firebase y MongoDB.</p>
        </div>
        <div className="service-card">
          <h3>Apps Móviles</h3>
          <p>Aplicaciones rápidas y escalables con Expo + React Native.</p>
        </div>
        <div className="service-card">
          <h3>Soporte Empresarial</h3>
          <p>Soluciones técnicas confiables y acompañamiento premium.</p>
        </div>
      </section>
    </main>
  );
}
