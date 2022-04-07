import "./Orientation.css";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

function OrientationLeft() {
  return (
    <div className="orientation_left">
      <ul className="social_media">
        <li>
          <a href="https://github.com/nuelobeto">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/nuelobeto/">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/nuelobeto">
            <FiTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/emmanuel-obeto-b3965112a/">
            <FiLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default OrientationLeft;
