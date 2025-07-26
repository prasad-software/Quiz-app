import React, { useState, useEffect } from "react";
import { stating } from "../data/stating";


const Quiz = ({ username, topic, restart }) => {
  const questions = stating[topic] || [];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    setTimer(10);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          handleSkip(); // auto-skip when timer ends
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [current]);

  const handleAnswer = (option) => {
    if (selected !== null) return; // prevent multiple selections
    setSelected(option);
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleSkip = () => {
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl mx-auto mt-40">
      {showResult ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 Well done, {username}!</h2>
          <p className="text-lg mb-6">
            Topic: <strong>{topic}</strong> <br />
            Score: {score} / {questions.length}
          </p>
          <button
            onClick={restart}
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700"
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              {username} - Question {current + 1}/{questions.length}
            </h3>
            <div className="text-red-500 font-bold text-lg">⏱ {timer}s</div>
          </div>

          <p className="text-lg font-medium mb-6">{questions[current].question}</p>

          <div className="space-y-3 mb-6">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full py-2 px-5 rounded-xl text-left text-base transition-colors ${
                  selected
                    ? option === questions[current].answer
                      ? "bg-green-400 text-white"
                      : selected === option
                      ? "bg-red-400 text-white"
                      : "bg-gray-200"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                disabled={selected !== null}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={handleSkip}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-xl"
            >
              Skip
            </button>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className={`${
                selected !== null
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white px-5 py-2 rounded-xl`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
