import React from "react";
import PText from "./PText";
import styled from "styled-components";

const ContactInfoItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3rem;
  }

  .info:hover {
    .para p {
      color: var(--white);
    }
  }
`;

function ContactInfoItem({ icon, text, link }) {
  return (
    <ContactInfoItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <a href={link} target="_blank">
          <PText>{text}</PText>
        </a>
      </div>
    </ContactInfoItemStyles>
  );
}

export default ContactInfoItem;
