// src/pages/Services.jsx
import "./Services.css";

export default function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Servicios Personalizados</h2>
      <p className="services-subtitle">
        Cada solución que creamos está diseñada a medida para tu empresa.
      </p>

      <div className="services-grid">
        <div className="service-box">
          <h3>Desarrollo Web</h3>
          <p>
            Páginas corporativas, paneles administrativos y sistemas inteligentes conectados a bases de datos como PostgreSQL, Firebase o MongoDB.
          </p>
        </div>
        <div className="service-box">
          <h3>Aplicaciones Móviles</h3>
          <p>
            Apps modernas con Expo y React Native. Desarrollamos desde MVPs hasta productos listos para escalar.
          </p>
        </div>
        <div className="service-box">
          <h3>Consultoría Técnica</h3>
          <p>
            Te ayudamos a definir tu arquitectura digital, resolver problemas técnicos o escalar tu infraestructura existente.
          </p>
        </div>
        <div className="service-box">
          <h3>Integración de Plataformas</h3>
          <p>
            Conectamos tus sistemas con APIs, CRMs, ERPs o soluciones personalizadas para aumentar tu eficiencia operativa.
          </p>
        </div>
      </div>
    </section>
  );
}
