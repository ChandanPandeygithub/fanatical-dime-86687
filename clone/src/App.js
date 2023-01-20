import "./App.css";
import CategoriesNavbar from "./Components/CategoriesNavbar";
import ImageSlider from "./Components/ImageSlider";
import Navbar from "./Components/Navbar";
import SortingBar from "./Components/SortingBar";  
  import {useSelector} from "react-redux";

function App() {
   const menuState = useSelector(store=>store.state);
   console.log(menuState)
  return (
    <div className="App">
      <div style={{ position: "sticky", top: "1px" }}>
        <Navbar />
        </div>
        <div style={{ position: "sticky", top: "10px" }}>
        <CategoriesNavbar/>
        </div>
        
    
     </div>
  );
}

export default App;
