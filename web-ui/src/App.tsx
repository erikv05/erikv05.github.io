import React from "react";
import { TypeAnimation } from "react-type-animation";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col font-mono">
      {/* Navigation bar */}
      <header className="absolute top-0 right-0 p-8 text-white justify-center items-center">
        <nav className="flex space-x-8 justify-center items-center">
          <a
            href="#about"
            className="hover:text-blue-500 transition duration-300"
          >
            <span className="text-blue-500">[0]</span> About
          </a>
          <a
            href="#experience"
            className="hover:text-blue-500 transition duration-300"
          >
            <span className="text-blue-500">[1]</span> Experience
          </a>
          <a
            href="#contact"
            className="hover:text-blue-500 transition duration-300"
          >
            <span className="text-blue-500">[2]</span> Contact
          </a>
          <a
            href="/resume"
            className="border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-black transition duration-300"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-start justify-center text-white px-8 lg:px-24">
        {/* Typing animation */}
        <div className="text-left">
          <p className="text-blue-500 text-lg mb-2 animate-pulse">
            Hi, my name is
          </p>
          <TypeAnimation
            className="font-bold text-6xl lg:text-8xl"
            sequence={["Erik Vank", 1000]}
            speed={10}
            repeat={0}
            wrapper={"div"}
          />
          <p className="text-4xl lg:text-6xl mt-4 text-gray-400">
            I'm passionate about software engineering.
          </p>
          <p className="text-lg lg:text-xl mt-4 text-gray-400 max-w-lg">
            I love building web applications, researching the applications of
            natural language processing, and everything in between.
          </p>
        </div>

        {/* Get In Touch button */}
        <div className="mt-8">
          <a
            href="#contact"
            className="text-blue-500 border border-blue-500 px-6 py-3 rounded hover:bg-blue-500 hover:text-black transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </main>

      {/* Social Icons Sidebar */}
      <div className="fixed bottom-2 left-4 flex flex-col space-y-4 text-blue-500">
        <a href="#" className="hover:text-white transition duration-300">
          <div>
            <img
              src={require("./images/linkedinLogo.png")}
              onMouseOver={() => {
                const img = document.getElementById("linkedinLogo");
                if (img) {
                  img.setAttribute(
                    "src",
                    require("./images/linkedinLogo-hover.png")
                  );
                }
              }}
              onMouseOut={() => {
                const img = document.getElementById("linkedinLogo");
                if (img) {
                  img.setAttribute("src", require("./images/linkedinLogo.png"));
                }
              }}
              className="object-scale-down h-8 w-8"
              id="linkedinLogo"
            />
          </div>
        </a>
        <a href="#" className="hover:text-white transition duration-300">
          GitHub
        </a>
      </div>

      {/* Footer Email */}
      <div className="fixed bottom-2 right-4 text-blue-500">
        <a
          href="mailto:erik_vank@brown.edu"
          className="hover:text-white transition duration-300"
        >
          erik_vank@brown.edu
        </a>
      </div>
    </div>
  );
};

export default App;
