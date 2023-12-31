import React from "react";
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from "../assets/images/about-me.jpg";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";

const AboutPageStyles = styled.div`
  padding: 10rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about-subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      color: var(--white);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about-heading {
    color: var(--white);
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about-info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .btn-cv {
    font-size: 2.2rem;
    background-color: var(--gray-1);
    padding: 0.7rem 2rem;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    transition: all 0.3s ease-in-out;

    a {
      color: black;
    }
    &:hover {
      transition: all 0.3s ease-in-out;
      background-color: transparent;
      a {
        color: var(--gray-1);
      }
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      border-radius: 8px;
    }
  }
  .about-info-items {
    margin-top: 15rem;
  }
  .about-info-item {
    margin-bottom: 10rem;
  }
  .about-info-heading {
    color: var(--white);
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .btn-cv {
      font-size: 1.8rem;
    }
    .about-info-items {
      margin-top: 5rem;
      margin-bottom: -10rem;
    }
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about-subheading {
      font-size: 1.8rem;
    }
    .about-heading {
      font-size: 2.8rem;
    }
    .about-info-heading {
      font-size: 3rem;
    }
  }
`;

function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about-subheading">
                Hola, yo soy <span>Sebastián</span>
              </p>
              <h2 className="about-heading">Desarrollador Frontend</h2>
              <div className="about-info">
                <PText>
                  Soy un Desarrollador Frontend con experiencia en Soporte TI de
                  Google y actualmente estudiando Ingeniería Informática en el
                  Politécnico Colombiano Jaime Isaza Cadavid. Mi enfoque se
                  centra en el servicio al cliente, con habilidades analíticas
                  sólidas y una mentalidad de aprendizaje continuo. <br />
                  <br />
                  He aplicado metodologías ágiles como Scrum en proyectos de
                  desarrollo de software, destacándome en diseño web responsivo
                  para garantizar la adaptabilidad a diferentes dispositivos.
                  Mis habilidades técnicas incluyen JavaScript, HTML, CSS, Java,
                  Python y React, así como la integración de APIs para conectar
                  servicios efectivamente. <br />
                  <br />
                  Manejo herramientas esenciales como Git, GitHub y Figma para
                  colaborar en equipo y diseñar interfaces de usuario atractivas
                  y funcionales. Mi objetivo es ofrecer soluciones de alta
                  calidad tanto en desarrollo frontend como en soporte TI,
                  manteniéndome actualizado en un campo en constante evolución.
                </PText>
              </div>
              <button className="btn-cv">
                <a
                  href="https://drive.google.com/file/d/1w5WRtioe3AQedJZVdWqqAPFh0wxTuqra/view?usp=sharing"
                  target="_blank"
                >
                  Descargar CV
                </a>
              </button>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about-info-items">
            <div className="about-info-item">
              <h1 className="about-info-heading">Formación</h1>

              <AboutInfoItem
                title="Profesional"
                items={["Ingeniería Informática - PJIC"]}
              />
              <AboutInfoItem
                title="Complementaria"
                items={["Desarrollo Frontend - Prográmate Academy "]}
              />
            </div>
            <div className="about-info-item">
              <h1 className="about-info-heading">Habilidades</h1>

              <AboutInfoItem
                title="Frontend"
                items={["HTML", "CSS", "JavaScript", "React"]}
              />
              <AboutInfoItem
                title="Backend"
                items={["Java", "Python", "MySQL"]}
              />
              <AboutInfoItem
                title="Diseño"
                items={["Adobe Illustrator", "Adobe Premiere", "Figma"]}
              />
            </div>
            <div className="about-info-item">
              <h1 className="about-info-heading">Experiencia</h1>

              <AboutInfoItem
                title="2023 - Actualidad"
                items={["Desarrollador Frontend Junior - Prográmate Academy"]}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}

export default About;
