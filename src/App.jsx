import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import OrientationLeft from "./components/Orientation/OrientationLeft";
import OrientationRight from "./components/Orientation/OrientationRight";

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <OrientationLeft />
      <OrientationRight />
      {/* <div style={{ width: "100%", height: "2000px" }}></div> */}
    </div>
  );
}

export default App;
