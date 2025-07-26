import React, { useState } from "react";

const Home = ({ setUsername, setTopic, startQuiz }) => {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("");

  const handleStart = () => {
    if (name.trim() && selected) {
      setUsername(name.trim());
      setTopic(selected);
      startQuiz();
    } else {
      alert("Please enter your name and select a topic.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 to-indigo-500 px-4">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-indigo-700">
          Quiz App
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-xl text-sm sm:text-base"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleStart();
          }}
        />

        <select
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-xl text-sm sm:text-base"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">Select Topic</option>
          <option value="javascript">JavaScript</option>
          <option value="reactjs">ReactJS</option>
          <option value="nextjs">Next.js</option>
          <option value="genai">Generative AI</option>
        </select>

        <button
          onClick={handleStart}
          disabled={!name.trim() || !selected}
          className={`w-full py-2 rounded-xl text-white font-semibold text-sm sm:text-base transition-all duration-300 ${
            name.trim() && selected
              ? "bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
              : "bg-indigo-400 cursor-not-allowed"
          }`}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
