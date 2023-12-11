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

  .left {
    width: 100%;
    max-width: 500px;
  }

  .right {
    width: 100%;
    max-width: 500px;
  }

  @media only screen and (max-width: 768px) {
    .contact-section-wrapper {
      flex-direction: column;
    }

    .contact-section-wrapper::after {
      display: none;
    }

    .left,
    .right {
      max-width: 100%;
    }

    .right {
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
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+57 310 601 1994" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="londonosebas201.sloa @gmail.com"
            />
            <ContactInfoItem icon={<MdPlace />} text="Rionegro, Antioquia " />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactStyles>
  );
}

export default ContactSection;
