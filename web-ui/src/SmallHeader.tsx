import React, { useState } from "react";

function SmallHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed bg-gray-800 top-0 right-0 p-4 text-white flex justify-between items-center w-full font-mono z-50">
      {/* Left Section: Logo/Profile */}
      <div className="flex items-center space-x-4 text-blue-500">
        <a href="./" onClick={() => setIsOpen(false)}>
          <div>
            <img
              alt="Portrait"
              src={require("./res/images/profilePhoto.png")}
              className="object-scale-down h-8 w-8"
              id="profilePhoto"
            />
          </div>
        </a>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden block text-white focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Links and Social Icons */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-8 justify-between absolute md:relative top-14 md:top-0 right-0 bg-gray-800 w-full md:w-auto p-4 md:p-0 z-50`}
      >
        {/* Social Icons */}
        <div className="flex space-x-4 text-blue-500">
          <a href="https://linkedin.com/in/erik-vank">
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

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
          <a
            href="./"
            onClick={() => setIsOpen(false)}
            className="hover:animate-bounce-one"
          >
            <span className="text-blue-500">[0]</span> About
          </a>
          <a
            href="/#/projects"
            onClick={() => setIsOpen(false)}
            className="hover:animate-bounce-one"
          >
            <span className="text-blue-500">[1]</span> Projects
          </a>
          <a
            href="/#/todo"
            onClick={() => setIsOpen(false)}
            className="hover:animate-bounce-one"
          >
            <span className="text-blue-500">[2]</span> Todo List
          </a>
          <a
            href="/#/contact"
            onClick={() => setIsOpen(false)}
            className="hover:animate-bounce-one"
          >
            <span className="text-blue-500">[3]</span> Contact
          </a>
          <a
            href={require("./res/ErikVank_Resume.pdf")}
            className="border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-black transition duration-300"
            download="ErikVank_Resume.pdf"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export default SmallHeader;
