import React from "react";
import { TypeAnimation } from "react-type-animation";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] flex flex-col">
      {/* Navigation bar */}
      <header className="absolute top-0 right-0 p-8 text-white">
        <nav className="flex space-x-8">
          <a href="#about" className="hover:text-teal-400">
            About
          </a>
          <a href="#experience" className="hover:text-teal-400">
            Experience
          </a>
          <a href="#work" className="hover:text-teal-400">
            Work
          </a>
          <a href="#contact" className="hover:text-teal-400">
            Contact
          </a>
          <a
            href="/resume"
            className="border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-black"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-start justify-center text-white px-8 lg:px-24">
        {/* Typing animation */}
        <div className="text-left">
          <p className="text-teal-400 text-lg mb-2">Hi, my name is</p>
          <TypeAnimation
            className="font-bold text-6xl lg:text-8xl"
            sequence={["", 1000, "Erik Vank", 1000]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={0}
          />
          <p className="text-4xl lg:text-6xl mt-4 text-gray-400">
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
            className="text-teal-400 border border-teal-400 px-6 py-3 rounded hover:bg-teal-400 hover:text-black transition"
          >
            Get In Touch
          </a>
        </div>
      </main>

      {/* Social Icons Sidebar */}
      <div className="fixed bottom-0 left-4 flex flex-col space-y-4 text-teal-400">
        <a href="#" className="hover:text-white">
          LinkedIn
        </a>
        <a href="#" className="hover:text-white">
          GitHub
        </a>
        <a href="#" className="hover:text-white">
          Instagram
        </a>
        <a href="#" className="hover:text-white">
          Twitter
        </a>
        <div className="w-px h-24 bg-teal-400"></div>
      </div>

      {/* Footer Email */}
      <div className="fixed bottom-0 right-4 text-teal-400 transform rotate-90">
        <a href="mailto:erik_vank@brown.edu" className="hover:text-white">
          erik_vank@brown.edu
        </a>
        <div className="w-px h-24 bg-teal-400 mt-4"></div>
      </div>
    </div>
  );
};

export default App;
