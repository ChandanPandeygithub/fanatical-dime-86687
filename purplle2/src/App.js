import logo from './logo.svg';
import './App.css';
import { MegaMenu } from './Components/MegaMenu';
import { Navbar } from './Components/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <MegaMenu/>
    
      <Box h={"500px"} ></Box>
      <Box h={"500px"} ></Box>
      <Box h={"500px"} ></Box>


    </div>
  );
}

export default App;
