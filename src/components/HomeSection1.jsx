import React from "react";
import Section1 from "../assets/images/home-section1.jpg";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDown from "../assets/images/scroll-down-arrow.svg";
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
    margin-bottom: -6rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
  }
  .section1-name {
    font-size: 5rem;
    font-family: "Montserrat SemiBold";
    color: var(--white);
  }

  .section1-subtitle {
    margin-top: 4rem;
    font-size: 5rem;
    font-family: "Montserrat SemiBold";
    color: var(--white);
  }

  .section1-image {
    max-width: 900px;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    img {
      border-radius: 6px;
    }
  }

  .section1-info {
    margin-top: -4rem;
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
    bottom: 37%;
  }

  .section1-scrollDown {
    right: 50px;
    bottom: 45%;
  }

  .section1-social-indicator,
  .section1-scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-50px) rotate(-90deg);
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
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media (min-width: 1540px) and (max-width: 2560px) {
    .section1 {
      margin-top: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .section1-subtitle {
      font-size: 3rem;
      margin-top: 5rem;
    }
    .section1 {
      min-height: 750px;
      margin-top: 0rem;
    }

    .section1-heading {
      font-size: 1.5rem;
      margin-bottom: -5rem;
      .section1-name {
        font-size: 4.5rem;
      }
    }

    .section1-image {
      height: 300px;
    }

    .section1-info {
      margin-top: -4rem;
    }

    .section1-social {
      left: 0;
      bottom: 36%;
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
      bottom: 42%;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.2rem;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .section1-image {
      width: 280px;
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
            <span className="section1-name">Sebastián</span>
          </h1>
          <div className="section1-image">
            <img src={Section1} alt="img-section1" />
          </div>
          <div className="section1-info">
            <h2 className="section1-subtitle">
              Desarrollador <br />
              Frontend
            </h2>
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
                    href="mailto:londonosebas201.sloa@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GM
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
