import React from "react";
import { TypeAnimation } from "react-type-animation";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col font-mono">
      {/* Navigation bar */}
      <header className="absolute top-0 right-0 p-8 text-white flex justify-between items-center w-full">
        {/* Social Icons */}
        <div className="flex space-x-4 text-blue-500">
          <a href="https://linkedin.com/in/erik-vank">
            <div>
              <img
                alt="LinkedIn Logo"
                src={require("./res/images/linkedinLogo.png")}
                onMouseOver={() => {
                  const img = document.getElementById("linkedinLogo");
                  if (img) {
                    img.setAttribute(
                      "src",
                      require("./res/images/linkedinLogo-hover.png")
                    );
                  }
                }}
                onMouseOut={() => {
                  const img = document.getElementById("linkedinLogo");
                  if (img) {
                    img.setAttribute(
                      "src",
                      require("./res/images/linkedinLogo.png")
                    );
                  }
                }}
                className="object-scale-down h-8 w-8"
                id="linkedinLogo"
              />
            </div>
          </a>
          <a href="https://github.com/erikv05">
            <img
              alt="GitHub Logo"
              src={require("./res/images/githubLogo.png")}
              onMouseOver={() => {
                const img = document.getElementById("githubLogo");
                if (img) {
                  img.setAttribute(
                    "src",
                    require("./res/images/githubLogo-hover.png")
                  );
                }
              }}
              onMouseOut={() => {
                const img = document.getElementById("githubLogo");
                if (img) {
                  img.setAttribute(
                    "src",
                    require("./res/images/githubLogo.png")
                  );
                }
              }}
              className="object-scale-down h-8 w-8"
              id="githubLogo"
            />
          </a>
          <a href="mailto:erik_vank@brown.edu">
            <img
              alt="Mail Logo"
              src={require("./res/images/mail.png")}
              onMouseOver={() => {
                const img = document.getElementById("mail");
                if (img) {
                  img.setAttribute(
                    "src",
                    require("./res/images/mail-hover.png")
                  );
                }
              }}
              onMouseOut={() => {
                const img = document.getElementById("mail");
                if (img) {
                  img.setAttribute("src", require("./res/images/mail.png"));
                }
              }}
              className="object-scale-down h-8 w-8"
              id="mail"
            />
          </a>
        </div>

        <nav className="flex space-x-8 justify-center items-center">
          <a href="./" className="hover:animate-bounce-one">
            <span className="text-blue-500">[0]</span> About
          </a>
          <a href="/projects" className="hover:animate-bounce-one">
            <span className="text-blue-500">[1]</span> Projects
          </a>
          <a href="/contact" className="hover:animate-bounce-one">
            <span className="text-blue-500">[2]</span> Contact
          </a>
          <a
            href={require("./res/ErikVank_Resume.pdf")}
            className="border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-black transition duration-300"
            download="ErikVank_Resume.pdf"
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
            href="/contact"
            className="text-blue-500 border border-blue-500 px-6 py-3 rounded hover:bg-blue-500 hover:text-black transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </main>
    </div>
  );
};

export default About;
