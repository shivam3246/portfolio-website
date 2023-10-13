import About from "./components/About";
import Svgbar from "./components/Svgbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Navinsvg from "./components/Navinsvg";
import Skills from "./components/Skills";
import Contact from "./components/Contact";




function App() {
  return (
    <>
    <Router>
    {/* <Svgbar/> */}
    
    <Routes>
    
      <Route path = "/" element ={<Svgbar/>}></Route>

      
      <Route path = "/acha" element ={<Navinsvg/>}></Route>
     
  
    
    </Routes>
    <Routes>
    <Route path = "/" element ={<Landingpage/>}></Route>
    </Routes>
    <Routes>
    <Route path = "/acha" element ={<Landingpage/>}></Route>
    
    </Routes>
    <Routes>
    <Route path = "/raju" element ={<Navinsvg/>}></Route>
    
    </Routes>
    <Routes>
    <Route path = "/raju" element ={<About/>}></Route>
    </Routes>
    
    <Routes>
    <Route path = "/kaju" element ={<Navinsvg/>}></Route>
    </Routes>
    <Routes>
      <Route path="/kaju" element = {<Skills/>}></Route>
    </Routes>
    <Routes>
    <Route path = "/maju" element ={<Navinsvg/>}></Route>
    </Routes>
    <Routes>
    <Route path = "/maju" element ={<Contact/>}></Route>
    </Routes>
    
    </Router>
    
     
      
  </>
  );
}

export default App;
