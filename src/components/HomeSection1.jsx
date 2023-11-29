import React from "react";
import Section1 from "../assets/images/home-section1.jpg";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDown from "../assets/images/scroll-down-arrow.svg";
import PText from "./PText";
import Button from "./Button";
import styled from "styled-components";

const HomeSection1Styles = styled.div`
  .section1 {
    margin-top: -10rem;
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .section1-heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
  }
  .section1-name {
    font-size: 7rem;
    font-family: "Montserrat SemiBold";
    color: var(--white);
  }

  .section1-image {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }

  .section1-info {
    margin-top: -25rem;
  }

  .section1-social,
  .section1-scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }

  .section1-social {
    left: 50px;
    bottom: 26%;
  }

  .section1-scrollDown {
    right: 50px;
    bottom: 33%;
  }

  .section1-social-indicator,
  .section1-scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: normal.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  .section1-scrollDown {
    img {
      max-height: 70px;
    }
  }

  .section1-social-text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .section1 {
      min-height: 750px;
      margin-top: -5rem;
    }

    .section1-heading {
      font-size: 1.5rem;
      margin-bottom: -3rem;
      .section1-name {
        font-size: 4.5rem;
      }
    }

    .section1-image {
      height: 300px;
    }

    .section1-info {
      margin-top: 3rem;
    }

    .section1-social {
      left: 0;
      bottom: 42%;
      width: 20px;

      .section1-social-indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }

      .section1-social-text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }

    .section1-scrollDown {
      right: 0;
      bottom: 46%;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.2rem;
      }
    }
  }
`;

function HomeSection1() {
  return (
    <HomeSection1Styles>
      <div className="section1">
        <div className="container">
          <h1 className="section1-heading">
            <span>Hola, soy</span>
            <span className="section1-name">Sebas</span>
          </h1>
          <div className="section1-image">
            <img src={Section1} alt="img-section1" />
          </div>
          <div className="section1-info">
            <PText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              voluptates repellendus sequi cumque quas laboriosam debitis beatae
              porro tenetur, a sit commodi saepe voluptatum, perferendis odio
              doloremque maiores consectetur repellat.
            </PText>
            <Button btnLink="/proyectos" btnText="Mira mis proyectos" />
          </div>
          <div className="section1-social">
            <div className="section1-social-indicator">
              <p>Sígueme</p>
              <img src={SocialMediaArrow} alt="" />
            </div>
            <div className="section1-social-text">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/iamsebas376/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IN
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/iamsebas376/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/iamsebas376"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="section1-scrollDown">
            <p>Scroll</p>
            <img src={ScrollDown} alt="" />
          </div>
        </div>
      </div>
    </HomeSection1Styles>
  );
}

export default HomeSection1;
