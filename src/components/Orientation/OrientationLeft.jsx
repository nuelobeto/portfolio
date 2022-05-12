import "./Orientation.css";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

function OrientationLeft() {
  return (
    <div className="orientation_left">
      <ul className="social_media">
        <li>
          <a
            href="https://github.com/nuelobeto"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nuelobeto/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/nuelobeto"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/emmanuel-obeto-b3965112a/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default OrientationLeft;
