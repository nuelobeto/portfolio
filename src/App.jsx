import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import OrientationLeft from "./components/Orientation/OrientationLeft";
import OrientationRight from "./components/Orientation/OrientationRight";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <OrientationLeft />
      <OrientationRight />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
