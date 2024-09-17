import React from "react";
import { TypeAnimation } from "react-type-animation";

const Projects: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-start justify-center text-white px-8 lg:px-24">
      <TypeAnimation
        className="font-bold text-4xl lg:text-4xl pb-8"
        sequence={["My Projects", 1000]}
        speed={50}
        repeat={0}
        wrapper={"div"}
        cursor={false}
      />
      {/* 2024 projects */}
      <div className="text-xl pb-8">2024</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* HackMTI */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">SpideySense</h2>
          <p className="text-gray-400">
            <a
              className="text-blue-500 hover:text-white underline transition-colors duration-150"
              href="https://github.com/gayathriaravindan/spidey-sense-proj"
            >
              GitHub
            </a>
            : HackMIT project using XGBoost and a Bangle.js watch to build
            wearable fear detection backed by an AI agent that calls the police
            on your behalf.
          </p>
        </div>
        {/* Personal website */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">This Website</h2>
          <p className="text-gray-400">
            <a
              className="text-blue-500 hover:text-white underline transition-colors duration-150"
              href="https://github.com/erikv05/erikv05.github.io"
            >
              GitHub
            </a>
            : React + Tailwind CSS with custom animations, deployed to GitHub
            pages.
          </p>
        </div>
        {/* Codetations */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Codetations</h2>
          <p className="text-gray-400">
            <a
              className="text-blue-500 hover:text-white underline transition-colors duration-150"
              href="https://github.com/elmisback/magic-markup"
            >
              GitHub
            </a>
            : Supporting document-external annotations using a language model
            (with the PLSE Lab @ University of Washington).
          </p>
        </div>
        {/* Honors final presentation */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            Birdsong Classification CNN
          </h2>
          <p className="text-gray-400">
            <a
              className="text-blue-500 hover:text-white underline transition-colors duration-150"
              href="https://github.com/erikv05/HONORS-393-Final-Project"
            >
              GitHub
            </a>
            : Classifying birdsong by species using a convolutional neural
            network.
          </p>
        </div>
      </div>
      {/* 2023 projects */}
      <div className="text-xl pb-8 pt-8">2023</div>
      {/* FlightBuddy */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">FlightBuddy</h2>
          <p className="text-gray-400">
            <a
              className="text-blue-500 hover:text-white underline transition-colors duration-150"
              href="https://github.com/erikv05/HONORS-393-Final-Project"
            >
              GitHub
            </a>
            : Flight delay prediction algorithm using XGBoost and React +
            Tailwind CSS/Flask for the web app.
          </p>
        </div>
        {/* Oversea*/}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Oversea</h2>
          <p className="text-gray-400">
            <a
              className="text-blue-500 hover:text-white underline transition-colors duration-150"
              href="https://github.com/erikv05/Oversea-MVP"
            >
              GitHub
            </a>
            : Personalizing customer emails using a language model.
          </p>
        </div>
        {/* LLM codegen research */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">LLM-Generated Code</h2>
          <p className="text-gray-400">
            No public code: Improving AI-generated code by creating test cases
            using the Z3 theorem prover.
          </p>
        </div>
      </div>
      {/* 2022 projects */}
      <div className="text-xl pb-8 pt-8">2022</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* crAPI loadgen*/}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            Locust API Load Generator
          </h2>
          <p className="text-gray-400">
            <a
              className="text-blue-500 hover:text-white underline transition-colors duration-150"
              href="https://github.com/erikv05/crAPI-loadgen"
            >
              GitHub
            </a>
            : Load generator to test an API written in Python using Locust.
          </p>
        </div>
        {/* Kafka project */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Text-Based Game</h2>
          <p className="text-gray-400">
            <a
              className="text-blue-500 hover:text-white underline transition-colors duration-150"
              href="https://github.com/erikv05/Kafka-Creative-Project"
            >
              GitHub
            </a>
            : A text-based game where you try to survive as Franz Kafka's Gregor
            Samsa.
          </p>
        </div>
        {/* Chemistry game */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Periodic Table Game</h2>
          <p className="text-gray-400">
            <a
              className="text-blue-500 hover:text-white underline transition-colors duration-150"
              href="https://github.com/erikv05/ChemistryGame"
            >
              GitHub
            </a>
            : An android game to help students learn the periodic table.
          </p>
        </div>
        {/* TA exam */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            Teacher's Assistant Exam
          </h2>
          <p className="text-gray-400">
            <a
              className="text-blue-500 hover:text-white underline transition-colors duration-150"
              href="https://github.com/erikv05/assesment-DS"
            >
              GitHub
            </a>
            : An exam to allow future students from my high school to become
            teacher's assistants for the data structures class.
          </p>
        </div>
      </div>
      {/* Add more space */}
      <div className="pb-8"></div>
    </div>
  );
};

export default Projects;
