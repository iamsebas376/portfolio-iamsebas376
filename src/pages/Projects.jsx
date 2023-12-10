import React from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectItem from "../components/ProjectItem";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import ProjectInfo from "../assets/data/projects";

const ProjectStyles = styled.div`
  padding: 10rem 0;
  .projects-all-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects-search-bar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects-search-bar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects-search-bar .search-icon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }
  .projects-search-bar .search-icon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects-search-bar,
    .projects-search-bar form,
    .projects-search-bar input {
      width: 100%;
    }
  }
`;

function Projects() {
  const [searchText, setSearchText] = React.useState("");
  const [projectData, setProjectData] = React.useState(ProjectInfo);

  React.useEffect(() => {
    if (searchText === "") return;
    setProjectData(() =>
      ProjectInfo.filter(
        (item) =>
          item.title &&
          item.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  };

  return (
    <ProjectStyles>
      <div className="container">
        <SectionTitle heading="Proyectos" subHeading="Algunos de mis" />
        <div className="projects-search-bar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Nombre del proyecto"
            />
            <MdSearch className="search-icon" />
          </form>
        </div>
        <div className="projects-all-items">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.title}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </ProjectStyles>
  );
}

export default Projects;
