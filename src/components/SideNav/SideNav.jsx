import "./SideNav.css";

function SideNav({ openSideNav, setOpenSideNav }) {
  return (
    <div className="side_nav" style={{ width: `${openSideNav ? "70%" : "0"}` }}>
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
        <li id="resume">
          <a
            id="side-nav-resume_btn"
            href="https://drive.google.com/file/d/1WMrKYAA4uQfs9iWfm5hhpQLvHRsRupyO/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      <button id="close_btn" onClick={() => setOpenSideNav(!openSideNav)}>
        &times;
      </button>
    </div>
  );
}

export default SideNav;
