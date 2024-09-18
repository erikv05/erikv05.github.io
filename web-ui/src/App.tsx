import { HashRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import SmallHeader from "./SmallHeader";
import Todo from "./Todo";

function App() {
  const maxWidth: number = 750;
  const [isDesktop, setDesktop] = useState(window.innerWidth > maxWidth);

  // For small screens, change header to hamburger menu
  const updateMedia = () => {
    setDesktop(window.innerWidth > maxWidth);
  };

  // Handle window resize
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-900 flex flex-col font-mono justify-center">
        {isDesktop ? <Header /> : <SmallHeader />}
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
