import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
