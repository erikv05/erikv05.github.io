import React from "react";
import { TypeAnimation } from "react-type-animation";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col font-mono">
      {/* Main content - projects */}
      <main className="flex-grow flex flex-col items-start justify-center text-white px-8 lg:px-24">
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
          {/* Project 1 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-400">Description of Project 1</p>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Project 2</h2>
            <p className="text-gray-400">Description of Project 2</p>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Project 3</h2>
            <p className="text-gray-400">Description of Project 3</p>
          </div>
        </div>
        {/* 2023 projects */}
        <div className="text-xl pb-8 pt-8">2023</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-400">Description of Project 1</p>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Project 2</h2>
            <p className="text-gray-400">Description of Project 2</p>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Project 3</h2>
            <p className="text-gray-400">Description of Project 3</p>
          </div>
        </div>
        {/* 2022 projects */}
        <div className="text-xl pb-8 pt-8">2022</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-400">Description of Project 1</p>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Project 2</h2>
            <p className="text-gray-400">Description of Project 2</p>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Project 3</h2>
            <p className="text-gray-400">Description of Project 3</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
