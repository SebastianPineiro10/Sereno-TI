import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Code2,
  Layers3,
  Smartphone,
} from "lucide-react";

import "../styles/Home.css";
import ProjectsCarousel from "../components/ProjectsCarousel";

const whatsappUrl =
  "https://wa.me/526567779435?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Sereno%20TI%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.";

const featuredServices = [
  {
    id: "web",
    number: "01",
    icon: Code2,
    title: "Desarrollo web",
    description:
      "Sitios corporativos, plataformas y sistemas administrativos creados de acuerdo con los procesos de tu negocio.",
  },
  {
    id: "mobile",
    number: "02",
    icon: Smartphone,
    title: "Aplicaciones móviles",
    description:
      "Aplicaciones para Android y iOS con interfaces modernas, navegación clara y una base preparada para crecer.",
  },
  {
    id: "systems",
    number: "03",
    icon: Layers3,
    title: "Sistemas a la medida",
    description:
      "Herramientas digitales para organizar información, automatizar tareas y mejorar la operación diaria.",
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-hero-decoration home-hero-decoration--one" />
        <div className="home-hero-decoration home-hero-decoration--two" />

        <div className="page-container home-hero-container">
          <div className="home-hero-content">
            <span className="home-hero-eyebrow">
              Desarrollo de soluciones digitales
            </span>

            <h1>
              Tecnología diseñada para hacer avanzar tu negocio.
            </h1>

            <p className="home-hero-description">
              En Sereno TI transformamos necesidades reales en páginas web,
              aplicaciones y sistemas profesionales, funcionales y fáciles de
              utilizar.
            </p>

            <div className="home-hero-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="home-primary-button"
              >
                Cuéntanos tu proyecto
                <ArrowRight size={18} />
              </a>

              <Link to="/services" className="home-secondary-button">
                Conocer servicios
              </Link>
            </div>

            <div className="home-hero-trust">
              <div>
                <Check size={17} />
                <span>Atención personalizada</span>
              </div>

              <div>
                <Check size={17} />
                <span>Desarrollo a la medida</span>
              </div>

              <div>
                <Check size={17} />
                <span>Comunicación directa</span>
              </div>
            </div>
          </div>

          <div className="home-hero-panel" aria-hidden="true">
            <div className="home-panel-header">
              <div className="home-panel-dots">
                <span />
                <span />
                <span />
              </div>

              <span>Sereno TI / Proyecto</span>
            </div>

            <div className="home-panel-body">
              <div className="home-panel-label">Proceso de desarrollo</div>

              <div className="home-panel-line home-panel-line--large" />
              <div className="home-panel-line home-panel-line--medium" />

              <div className="home-panel-progress">
                <div>
                  <span>01</span>
                  <strong>Analizamos</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Diseñamos</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Desarrollamos</strong>
                </div>
              </div>

              <div className="home-panel-status">
                <span />
                Solución construida alrededor de tu negocio
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-introduction">
        <div className="page-container home-introduction-container">
          <div>
            <span className="section-eyebrow">Qué hacemos</span>

            <h2>
              Soluciones claras para necesidades reales.
            </h2>
          </div>

          <p>
            No se trata solamente de crear una página o una aplicación.
            Analizamos lo que necesitas para desarrollar una herramienta útil,
            estable y alineada con tus objetivos.
          </p>
        </div>
      </section>

      <section className="home-services">
        <div className="page-container">
          <div className="home-services-grid">
            {featuredServices.map(
              ({ id, number, icon: Icon, title, description }) => (
                <article className="home-service-card" key={id}>
                  <div className="home-service-card-header">
                    <div className="home-service-icon">
                      <Icon size={24} strokeWidth={1.6} />
                    </div>

                    <span>{number}</span>
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              )
            )}
          </div>

          

          <div className="home-services-footer">
            <p>
              Cada proyecto comienza con una conversación para conocer el
              problema, el alcance y la mejor forma de resolverlo.
            </p>

            <Link to="/services">
              Explorar todos los servicios
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      <ProjectsCarousel />

      <section className="home-process">
        <div className="page-container home-process-container">
          <div className="home-process-heading">
            <span className="section-eyebrow">Nuestra forma de trabajar</span>

            <h2>Un proceso profesional y fácil de entender.</h2>
          </div>

          <div className="home-process-steps">
            <article>
              <span>01</span>
              <div>
                <h3>Conocemos tu proyecto</h3>
                <p>
                  Escuchamos tu idea, necesidades, objetivos y la forma en la
                  que actualmente trabaja tu negocio.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Definimos la solución</h3>
                <p>
                  Organizamos las funciones principales y establecemos una
                  propuesta clara antes de comenzar.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Diseñamos y desarrollamos</h3>
                <p>
                  Construimos el proyecto cuidando el diseño, el funcionamiento
                  y la experiencia del usuario.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h3>Revisamos y entregamos</h3>
                <p>
                  Probamos las funciones principales y te acompañamos durante
                  la puesta en marcha.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="page-container home-final-cta-container">
          <div>
            <span>¿Tienes una idea o una necesidad específica?</span>

            <h2>Hablemos sobre la solución que tu negocio necesita.</h2>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Iniciar conversación
            <ArrowRight size={19} />
          </a>
        </div>
      </section>
    </main>
  );
}