import React from "react";
import { TypeAnimation } from "react-type-animation";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 text-white py-4 shadow-md">
        <div className="flex items-center justify-center">
          <TypeAnimation
            className="text-center text-4xl font-bold"
            sequence={["Erik Vank"]}
            wrapper="span"
            speed={25}
            style={{ display: "inline-block" }}
            cursor={false}
          />
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center my-8"></div>
        <section className="w-full max-w-4xl px-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-600">Description of project 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-600">Description of project 2.</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </section>
      </main>
      <footer className="w-full bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 Erik Vank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
