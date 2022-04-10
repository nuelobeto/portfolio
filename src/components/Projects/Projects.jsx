import "./Projects.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { urlFor, client } from "../../sanityClient";
import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => setProjects(data));
  }, []);

  const numOfProjects = showMore ? projects.length : 6;

  return (
    <section className="projects" id="projects">
      <div className="projects_content section">
        <h2 className="section_heading">Some Things I've Built</h2>
        <ul className="projects_list">
          {projects.slice(0, numOfProjects).map((project, index) => (
            <li className="project" key={index}>
              <div className="project_img">
                <a href={project.projectLink}>
                  <img src={urlFor(project.imgUrl)} alt="" />
                </a>
              </div>

              <div className="project_content">
                <h3 className="project_title">{project.title}</h3>
                <p className="project_description">{project.description}</p>
                <ul className="tags">
                  {project.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
                <div className="links">
                  <a href={project.codeLink}>
                    <FiGithub />
                  </a>
                  <a href={project.projectLink}>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {projects.length > 6 && (
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "Show More"}
          </button>
        )}
      </div>
    </section>
  );
}

export default Projects;
