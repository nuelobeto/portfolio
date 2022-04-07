import { useEffect, useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import SideNav from "../SideNav/SideNav";

function Navbar() {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);
  const [openSideNav, setOpenSideNav] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <nav style={{ top: !hideNav ? "-73px" : "0" }}>
      <h3 id="logo">Nuel Obeto</h3>

      {viewportWidth > 768 ? (
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              id="resume_btn"
              href="https://drive.google.com/file/d/1WMrKYAA4uQfs9iWfm5hhpQLvHRsRupyO/view?usp=sharing"
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
