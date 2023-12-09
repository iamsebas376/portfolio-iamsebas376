import React from "react";
import styled from "styled-components";

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-size: "RobotoMono Regular";
    font-size: 2rem;
  }
  h2 {
    color: var(--white);
    font-size: "Montserrat Bold";
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.4rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

function SectionTitle({
  subHeading = "this is a subtitle",
  heading = "this is a title",
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subHeading}</p>
      <h2> {heading}</h2>
    </SectionTitleStyle>
  );
}

export default SectionTitle;
