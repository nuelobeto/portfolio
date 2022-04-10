import { useEffect, useState } from "react";
import "./About.css";
import { urlFor, client } from "../../sanityClient";

function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => setAbout(data));
  }, []);
  return (
    <section className="about" id="about">
      <div className="about_content section">
        <h2 className="section_heading">About Me</h2>
        {about.map((about, index) => (
          <div className="about_body" key={index}>
            <div className="about_body-left">
              <p>{about.description1}</p>
              <p>{about.description2}</p>
              <p>{about.description3}</p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul key={index} className="tech_list">
                {about.tags.map((tag, index) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="about_body-right">
              <img src={urlFor(about.imgUrl)} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
