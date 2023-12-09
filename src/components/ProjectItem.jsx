import React from "react";
import { Link } from "react-router-dom";
import projects from "../assets/data/projects";
import styled from "styled-components";

const ProjectItemStyle = styled.div`
  .project-item-img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);

    img {
      object-fit: cover;
    }
  }

  .project-item-info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }

  .project-item-title {
    color: var(--white);

    font-size: 2.5rem;
  }

  .project-item-desc {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
    min-height: 120px;
  }
  @media only screen and (max-width: 768px) {
    .project-item-img {
      height: 300px;
    }
  }
`;

function ProjectItem({ img, title, desc, link }) {
  return (
    <ProjectItemStyle>
      <Link to={link} target="_blank" className="project-item-img">
        <img src={img} alt="project img" />
      </Link>
      <div className="project-item-info">
        <h3 className="project-item-title">{title}</h3>
        <p className="project-item-desc">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}

export default ProjectItem;
