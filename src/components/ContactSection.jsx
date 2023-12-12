import React from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import { MdEmail, MdLocalPhone, MdPlace } from "react-icons/md";
import ContactForm from "./ContactForm";

const ContactStyles = styled.div`
  padding: 10rem 0;
  .contact-section-wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    gap: 5rem;
    margin-top: 5rem;
  }

  .contact-section-wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .left-container {
    width: 100%;
    max-width: 500px;
  }

  .left-items {
    margin-top: 14rem;
  }

  .right-container {
    width: 100%;
    max-width: 500px;
  }

  .right-items {
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .contact-section-wrapper {
      flex-direction: column;
    }

    .contact-section-wrapper::after {
      display: none;
    }

    .left-container,
    .right-container {
      max-width: 100%;
    }

    .left-items {
      margin-top: 5rem;
    }

    .right-container {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

function ContactSection() {
  return (
    <ContactStyles>
      <div className="container">
        <SectionTitle heading="conmigo" subHeading="Ponte en contacto" />
        <div className="contact-section-wrapper">
          <div className="left-container">
            <div className="left-title">
              <SectionTitle heading="" subHeading="Datos de contacto: " />
            </div>
            <div className="left-items">
              <ContactInfoItem
                icon={<MdLocalPhone />}
                text="+57 310 601 1994"
                link="tel:+573106011994"
              />
              <ContactInfoItem
                icon={<MdEmail />}
                text="londonosebas201.sloa @gmail.com"
                link="mailto:londonosebas201.sloa@gmail.com"
              />
              <ContactInfoItem
                icon={<MdPlace />}
                text="Rionegro, Antioquia "
                link="https://www.google.com/maps/@6.1448369,-75.374118,14z?entry=ttu"
              />
            </div>
          </div>
          <div className="right-container">
            <div className="right-title">
              <SectionTitle heading="" subHeading="Envíame un mensaje:" />
            </div>

            <div className="right-items">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </ContactStyles>
  );
}

export default ContactSection;
