import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import {useState} from "react";

function App() {
const [page, setPage] = useState("Home");

function displayPage() {
  if(page === "Home") {
    return <Home/>
  }
  else if(page === "About") {
    return <About/>
  }
  else if(page === "Projects") {
    return <Projects/>
  }
  else if(page === "Contact") {
    return <Contact/>
  }
}

  return (
    <div className="app" style={{backgroundColor: "black"}}>
      <NavBar/>

      {displayPage()}
    </div>
  );
}

export default App;
