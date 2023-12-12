import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterColStyles = styled.div`
  .heading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--white);
      transition: all 0.3s ease;
    }
  }
`;

function FooterCol({
  heading,
  links = [{ type: "links", title: "title", path: "/" }],
}) {
  return (
    <FooterColStyles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === "links" ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </FooterColStyles>
  );
}

export default FooterCol;
