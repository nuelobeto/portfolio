import "./About.css";
import aboutImg from "./images.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about_content section">
        <h2 className="section_heading">About Me</h2>
        <div className="about_body">
          <div className="about_body-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              vitae culpa amet! In officia quasi iure, necessitatibus cum
              inventore voluptas?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              quisquam ipsa tempora adipisci vero? Esse.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              recusandae magni iure nemo sed architecto incidunt distinctio
              voluptate dicta temporibus?
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React js</li>
              <li>Node js</li>
              <li>Sanity</li>
              <li>Firebase</li>
              <li>Solidity</li>
              <li>Web3 js</li>
            </ul>
          </div>
          <div className="about_body-right">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
