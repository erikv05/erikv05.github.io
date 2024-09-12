import React from "react";

const Contact: React.FC = () => {
  const handleSendClick = () => {
    alert("Message sent!");
  };

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

      {/* TODO Main content */}
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <form className="w-full max-w-lg bg-gray-800 p-8 rounded-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-message"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-message"
                placeholder="Your message here..."
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSendClick}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
