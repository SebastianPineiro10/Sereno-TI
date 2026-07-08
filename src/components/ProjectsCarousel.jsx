import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "../styles/ProjectsCarousel.css";

const projects = [
  {
    id: "circulo-dental",
    client: "Círculo Dental",
    category: "Sitio web corporativo",
    description:
      "Plataforma web desarrollada para presentar servicios dentales, promociones, testimonios, ubicación y medios de contacto de forma clara y profesional.",
    image: "https://res.cloudinary.com/dcerhiol0/image/upload/v1783529290/Logo-Circulo_Dental_consultorio_dk2mh0.png",

    // Coloca aquí el enlace real de Círculo Dental
    url: "https://www.circulodentals.com.mx/",

    services: [
      "Diseño responsive",
      "Información de servicios",
      "Integración con WhatsApp",
    ],
  },
  {
    id: "mp-innova",
    client: "Mp Innova Bienes Raíces",
    category: "Plataforma inmobiliaria",
    description:
      "Solución digital diseñada para mostrar propiedades, organizar información comercial y facilitar el contacto con clientes interesados.",
    image: "https://res.cloudinary.com/dcerhiol0/image/upload/v1783529185/LOGODORADO02_4_cifaaa_ritesd.png",

    // Coloca aquí el enlace real de MP Innova
    url: "https://www.mpinnova.com/",

    services: [
      "Catálogo de propiedades",
      "Diseño responsive",
      "Contacto comercial",
    ],
  },
];

export default function ProjectsCarousel() {
  const [currentProject, setCurrentProject] = useState(0);

  const previousProject = () => {
    setCurrentProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setCurrentProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentProject((current) =>
        current === projects.length - 1 ? 0 : current + 1
      );
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  const project = projects[currentProject];

  return (
    <section className="projects-showcase">
      <div className="page-container">
        <div className="projects-showcase-heading">
          <div>
            <span className="section-eyebrow">Proyectos realizados</span>

            <h2>Soluciones desarrolladas para negocios reales.</h2>
          </div>

          <p>
            Conoce algunos proyectos en los que hemos trabajado, diseñando
            soluciones digitales adaptadas a las necesidades de cada negocio.
          </p>
        </div>

        <div className="projects-carousel">
          <div className="projects-browser-column">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-browser"
              aria-label={`Abrir proyecto de ${project.client}`}
            >
              <div className="projects-browser-header">
                <div className="projects-browser-controls">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="projects-browser-address">
                  {project.client}
                </div>

                <ArrowUpRight size={17} />
              </div>

              <div className="projects-browser-screen">
                <img
                  key={project.image}
                  src={project.image}
                  alt={`Vista previa del proyecto ${project.client}`}
                />

                <div className="projects-browser-overlay">
                  <span>Visitar proyecto</span>
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </a>

            <div className="projects-carousel-controls">
              <div
                className="projects-carousel-dots"
                aria-label="Seleccionar proyecto"
              >
                {projects.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`projects-carousel-dot ${
                      currentProject === index ? "active" : ""
                    }`}
                    onClick={() => setCurrentProject(index)}
                    aria-label={`Mostrar proyecto ${item.client}`}
                    aria-current={
                      currentProject === index ? "true" : undefined
                    }
                  />
                ))}
              </div>

              <div className="projects-carousel-arrows">
                <button
                  type="button"
                  onClick={previousProject}
                  aria-label="Mostrar proyecto anterior"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={nextProject}
                  aria-label="Mostrar proyecto siguiente"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <article className="projects-information" key={project.id}>
            <span className="projects-information-number">
              {String(currentProject + 1).padStart(2, "0")}
              <small>/ {String(projects.length).padStart(2, "0")}</small>
            </span>

            <span className="projects-information-category">
              {project.category}
            </span>

            <h3>{project.client}</h3>

            <p>{project.description}</p>

            <div className="projects-information-services">
              {project.services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-information-link"
            >
              Ver página
              <ArrowUpRight size={18} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}