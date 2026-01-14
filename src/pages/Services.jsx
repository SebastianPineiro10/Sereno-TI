import "./Services.css";
import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Servicios Personalizados</h2>
      <p className="services-subtitle">
        Cada solución que creamos está diseñada a medida para tu empresa.
      </p>

      <div className="services-grid">
        {servicesData.map(({ id, title, description, images }) => (
          <div key={id} className="service-box">
            <div className="service-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>

            <div className="service-icons">
              {images.map((img, index) => (
                <img key={index} src={img} alt={`Icono ${index + 1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
