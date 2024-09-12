import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-900 flex flex-col font-mono justify-center">
        <Header />
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
