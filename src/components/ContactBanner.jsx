import React from "react";
import PText from "./PText";
import Button from "./Button";
import styled from "styled-components";

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contact-banner-wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }

  .contact-banner-heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .contact-banner-heading {
      font-size: 2.8rem;
      margin-bottom: 1.5rem;
    }
  }
`;
function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contact-banner-wrapper">
          <PText>¿Tienes algo en mente?</PText>
          <h3 className="contact-banner-heading">Déjame ayudarte</h3>
          <Button btnLink="/contacto" btnText="Contáctame" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}

export default ContactBanner;
