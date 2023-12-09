import React from "react";
import SectionTitle from "./SectionTitle";
import Ptex from "./PText.jsx";
import Button from "./Button.jsx";
import AboutSection1 from "../assets/images/about-section1.jpg";
import styled from "styled-components";

const AboutSectionStyles = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .about-section-left,
  .about-section-right {
    flex: 1;
  }
  .about-section-right {
    width: 100%;
    text-align: center;
    padding: 2rem;
  }

  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .about-section-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .about-img {
    max-height: 550px;
    object-fit: cover;
    width: 100%;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
  }

  @media only screen and (max-width: 950px) {
    .about-section-left {
      flex: 4;
    }
    .about-section-right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .section-title {
      margin-bottom: 2rem;
    }
    .container {
      flex-direction: column;
      text-align: center;
    }
    .about-section-left,
    .about-section-right {
      width: 100%;
    }
    .about-img {
      max-height: 400px;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
    }
    .about-section-buttons {
      flex-direction: column;
      gap: 0.5rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
        .button {
          width: 100%;
          text-align: center;
          margin: 0 auto;
          margin-bottom: 2rem;
        }
      }
    }
  }
`;
function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="about-section-left">
          <SectionTitle
            subHeading="Un poco"
            heading="Sobre mi"
            className="section-title"
          />
          <Ptex>
            Desarrollador Frontend con formación de Soporte TI de Google, y
            actualmente cursando la carrera de ingeniería informática en el
            Politécnico Colombiano Jaime Isaza Cadavid.
          </Ptex>
          <div className="about-section-buttons">
            <Button btnLink="/proyectos" btnText="Mira mis proyectos" />
            <Button btnLink="/sobre-mi" btnText="Más sobre mi" outline={true} />
          </div>
        </div>
        <div className="about-section-right">
          <img src={AboutSection1} alt="" className="about-img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}

export default AboutSection;
