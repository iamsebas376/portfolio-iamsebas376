import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { GrPrevious, GrNext } from "react-icons/gr";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import testimonials from "../assets/data/testimonials";
import PText from "./PText";

const TestimonialStyles = styled.div`
  overflow-x: hidden;
  padding: 1rem 0;
  text-align: center;
  .testimonal-wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }

  .testimonal-info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }

  .testimonal-desc {
    .para {
      text-align: center;
    }
  }

  .testimonial-name {
    margin-top: 4rem;
    font-family: "Montserrat Bold";
    font-size: 2.2rem;
  }

  .testimonial-title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }

  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      pointer-events: none;
      width: 30px;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }

  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
  }

  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: opacity, transform;
  }

  .fade-exit {
    opacity: 1;
    transform: scale(1);
  }

  .fade-exit-active {
    opacity: 0;
    transition: 250ms ease-in opacity;
    transform: scale(0.96);
    transition-property: opacity, transform;
  }
`;

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeSlide = testimonials[activeIndex];

  function handlePrev() {
    if (activeIndex === 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  function handleNext() {
    if (activeIndex === testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  return (
    <TestimonialStyles>
      <div className="container">
        <SectionTitle heading="Testimonios" subHeading="" />
        <div className="testimonial-wrapper">
          <SwitchTransition>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonal-info">
                <div className="testimonial-desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="testimonial-name">{activeSlide.name}</h2>
                <p className="testimonial-title">{activeSlide.title}</p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <GrPrevious />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <GrNext />
          </div>
        </div>
      </div>
    </TestimonialStyles>
  );
}

export default TestimonialsSection;
