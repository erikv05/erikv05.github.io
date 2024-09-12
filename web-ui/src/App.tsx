import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
