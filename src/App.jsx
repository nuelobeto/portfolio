import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import OrientationLeft from "./components/Orientation/OrientationLeft";
import OrientationRight from "./components/Orientation/OrientationRight";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app_container">
      <header>
        <Navbar />
      </header>
      <main>
        <OrientationLeft />
        <OrientationRight />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
