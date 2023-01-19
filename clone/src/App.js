import "./App.css";
import ImageSlider from "./Components/ImageSlider";
import Navbar from "./Components/Navbar";
import SortingBar from "./Components/SortingBar";

function App() {
  return (
    <div className="App">
      <div style={{ position: "sticky", top: "1px" }}>
        <Navbar />
        <SortingBar/>
      </div>
    
     </div>
  );
}

export default App;
