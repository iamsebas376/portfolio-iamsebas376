import React from "react";
import PText from "./PText";
import FooterCol from "./FooterCol";
import styled from "styled-components";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);

  .container {
    display: flex;
    gap: 3rem;
  }

  .footer-col-1 {
    flex: 2;
  }

  .footer-col-2,
  .footer-col-3,
  .footer-col-4 {
    flex: 1;
  }

  .footer-col-1-title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--deep-dark);
    padding-top: 1rem;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 0rem;

    .container {
      flex-direction: column;
      gap: 0;
      & > div {
        margin-top: 5rem;
      }
    }

    .footer-col-1-title {
      display: flex;
      justify-content: center;
    }

    .footer-col-1 para {
      max-width: 100%;
    }

    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer-col-1">
          <h1 className="footer-col-1-title">Sebatián Londoño</h1>
          <PText>
            Soy un desarrollador Frontend con formación de Soporte TI de Google,
            y actualmente estoy cursando la carrera de ingeniería informática en
            el Politécnico Colombiano Jaime Isaza Cadavid.
          </PText>
        </div>
        <div className="footer-col-2">
          <FooterCol
            heading="Links"
            links={[
              { type: "Links", title: "Inicio", path: "/inicio" },
              { type: "Links", title: "Sobre mi", path: "/sobre-mi" },
              { type: "Links", title: "Proyectos", path: "/proyectos" },
              { type: "Links", title: "Contacto", path: "/contacto" },
            ]}
          />
        </div>
        <div className="footer-col-3">
          <FooterCol
            heading="Contacto"
            links={[
              { title: "Teléfono", path: "tel:+573106011994" },
              { title: "Gmail", path: "mailto:londonosebas201.sloa@gmail.com" },
              {
                title: "Ubicación",
                path: "https://www.google.com/maps/place/El+Carmen+de+Viboral,+Antioquia/@6.0832668,-75.3467308,14.75z/data=!4m6!3m5!1s0x8e46a27be2436be3:0xf089e7d7aaeb49b0!8m2!3d6.083056!4d-75.335278!16zL20vMDdodmp0?hl=es&entry=ttu",
              },
            ]}
          />
        </div>
        <div className="footer-col-4">
          <FooterCol
            heading="Redes"
            links={[
              {
                title: "Linkedin",
                path: "https://www.linkedin.com/in/iamsebas376/",
              },
              ,
              {
                title: "Github",
                path: "https://github.com/iamsebas376",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>&copy; 2023 - iamsebas376</PText>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
