import "./Footer.css";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="footer_content">
        <ul className="footer_links">
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
      <p>Built by Obeto Emmanuel</p>
    </footer>
  );
}

export default Footer;
