import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
