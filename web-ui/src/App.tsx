import React from "react";
import { TypeAnimation } from "react-type-animation";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Navigation bar */}
      <header className="absolute top-0 right-0 p-8 text-white">
        <nav className="flex space-x-8">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#experience" className="hover:text-blue-500">
            Experience
          </a>
          <a href="#work" className="hover:text-blue-500">
            Work
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
          <a
            href="/resume"
            className="border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-black"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-start justify-center text-white px-8 lg:px-24">
        {/* Typing animation */}
        <div className="text-left">
          <p className="text-blue-500 text-lg mb-2">Hi, my name is</p>
          <TypeAnimation
            className="font-bold text-6xl lg:text-8xl"
            sequence={["", 1000, "Erik Vank", 1000]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={0}
          />
          <p className="text-4xl lg:text-6xl mt-4 text-gray-500">
            I'm passionate about engineering.
          </p>
          <p className="text-lg lg:text-xl mt-4 text-gray-500 max-w-lg">
            I love building web applications, researching large language models,
            and everything in between.
          </p>
        </div>

        {/* Get In Touch button */}
        <div className="mt-8">
          <a
            href="#contact"
            className="text-blue-500 border border-blue-500 px-6 py-3 rounded hover:bg-blue-500 hover:text-black transition"
          >
            Get In Touch
          </a>
        </div>
      </main>

      {/* Social Icons Sidebar */}
      <div className="fixed bottom-0 left-4 flex flex-col space-y-4 text-blue-500">
        <a href="#" className="hover:text-white">
          LinkedIn
        </a>
        <a
          href="#"
          className="hover:text-white"
          style={{ paddingBottom: "1rem" }}
        >
          GitHub
        </a>
      </div>

      {/* Footer Email */}
      <div className="fixed bottom-0 right-4 text-blue-500 transform rotate-90">
        <a href="mailto:erik_vank@brown.edu" className="hover:text-white">
          erik_vank@brown.edu
        </a>
      </div>
    </div>
  );
};

export default App;
