import React from "react";
import { TypeAnimation } from "react-type-animation";

const About: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-start justify-center text-white px-8 lg:px-24">
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
          Driven to make an impact in tech.
        </p>
        <p className="text-lg lg:text-xl mt-4 text-gray-400 max-w-lg">
          I love building web applications, researching the uses of natural
          language processing, and everything in between.
        </p>
      </div>

      {/* Get In Touch button */}
      <div className="mt-8">
        <a
          href="/#/contact"
          className="text-blue-500 border border-blue-500 px-6 py-3 rounded hover:bg-blue-500 hover:text-black transition duration-300"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default About;
