import "./Projects.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import project1 from "./project1.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects_content section">
        <h2 className="section_heading">Some Things I've Built</h2>
        <ul className="projects_list">
          <li className="project">
            <div className="project_img">
              <a href="projectlink">
                <img src={project1} alt="" />
              </a>
            </div>

            <div className="project_content">
              <h3 className="project_title">Project Title</h3>
              <p className="project_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                in?
              </p>
              <ul className="tags">
                <li>VSCode</li>
                <li>React</li>
                <li>Node</li>
              </ul>
              <div className="links">
                <a href="github">
                  <FiGithub />
                </a>
                <a href="projectlink">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </li>

          <li className="project">
            <div className="project_img">
              <a href="projectlink">
                <img src={project1} alt="" />
              </a>
            </div>

            <div className="project_content">
              <h3 className="project_title">Project Title</h3>
              <p className="project_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                in?
              </p>
              <ul className="tags">
                <li>VSCode</li>
                <li>React</li>
                <li>Node</li>
              </ul>
              <div className="links">
                <a href="github">
                  <FiGithub />
                </a>
                <a href="projectlink">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </li>

          <li className="project">
            <div className="project_img">
              <a href="projectlink">
                <img src={project1} alt="" />
              </a>
            </div>

            <div className="project_content">
              <h3 className="project_title">Project Title</h3>
              <p className="project_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                in?
              </p>
              <ul className="tags">
                <li>VSCode</li>
                <li>React</li>
                <li>Node</li>
              </ul>
              <div className="links">
                <a href="github">
                  <FiGithub />
                </a>
                <a href="projectlink">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
