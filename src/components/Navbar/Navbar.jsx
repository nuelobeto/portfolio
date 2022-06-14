import { useEffect, useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import SideNav from "../SideNav/SideNav";

function Navbar() {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);
  const [openSideNav, setOpenSideNav] = useState(false);
  const [active, setActive] = useState(null);

  const links = ["About", "Projects", "Contact"];

  // hide navbar on scroll
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.boxShadow =
        "0 10px 30px -10px rgb(218, 216, 216)";
    } else {
      document.getElementById("navbar").style.top = "-73px";
      document.getElementById("navbar").style.boxShadow = "none";
    }
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    // track viewport width
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  // set active link
  const handleLinkChange = (e, index) => {
    e.stopPropagation();
    setActive(index);
  };

  return (
    <nav id="navbar">
      <a href="#home">
        <h3 id="logo">Nuel Obeto</h3>
      </a>

      {viewportWidth > 768 ? (
        <ul id="links">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.toLowerCase()}`}
                className={index === active ? "active" : ""}
                onClick={(e) => handleLinkChange(e, index)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              id="resume_btn"
              href="https://drive.google.com/file/d/1p4g9D0UsOF8FkmKvilp8jRm9uD1Ub14G/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      ) : (
        <>
          <BiMenuAltRight
            id="menu_bar"
            onClick={() => setOpenSideNav(!openSideNav)}
          />
          <SideNav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
        </>
      )}
    </nav>
  );
}

export default Navbar;
