import React from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import PText from "./PText";

const FormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }

  label {
    font-size: 1.8rem;
  }

  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
    border: 0.2rem solid var(--gray-2);
  }

  textarea {
    min-height: 250px;
    resize: vertical;
  }

  .btn {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid var(--gray-1);
    &:hover {
      background-color: transparent;
      transition: all 0.3s ease;
      color: var(--gray-1);
    }
  }
`;

function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (name && email && message) {
      emailjs
        .sendForm(
          "service_rx5rmnp",
          "template_3edej38",
          form.current,
          "orkbs0ghwa9EbWcDc"
        )
        .then(() => {
          setName("");
          setEmail("");
          setMessage("");
        });
    } else {
      alert("Diligencia todos los campos antes de enviar");
    }
  };

  return (
    <div>
      <FormStyles ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            Tu nombre:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Tu correo:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Tu mensaje:
            <textarea
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
            />
          </label>
          <PText>Caracteres restantes: {500 - message.length}</PText>
        </div>
        <button className="btn" type="submit">
          Enviar
        </button>
      </FormStyles>
    </div>
  );
}

export default ContactForm;
