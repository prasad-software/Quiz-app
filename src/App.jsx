import React, { useState } from "react";
import Home from "./Component/Home";
import Quiz from "./Component/Quiz";

const App = () => {
  const [username, setUsername] = useState("");
  const [topic, setTopic] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const restartQuiz = () => {
    setUsername("");
    setTopic("");
    setQuizStarted(false);
  };

  return (
    <div>
      {!quizStarted ? (
        <Home setUsername={setUsername} setTopic={setTopic} startQuiz={startQuiz} />
      ) : (
        <Quiz username={username} topic={topic} restart={restartQuiz} />
      )}
    </div>
  );
};

export default App;
