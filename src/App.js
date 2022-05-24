import "./App.css";
import wordlegrid from "./components/wordlegrid";
import keyboard from "./components/keyboard";
import { boardDefault, generateWordSet } from "./grid";
import React, { useState, createContext, useEffect } from "react";
import finish from "./components/finish";

export const AppContext = createContext();

function App() {
  const [wordlegrid, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [setWord, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [finish, setGameOver] = useState({
    finish: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.setWord);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const start = () => {
    if (currentAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += wordlegrid[currentAttempt.attempt][i];
    }
    if (setWord.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currentAttempt.attempt + 1, letter: 0 });
    } else {
      alert("Does not exist");
    }

    if (currWord === correctWord) {
      setGameOver({ finish: true, guessedWord: true });
      return;
    }
    console.log(currentAttempt);
    if (currentAttempt.attempt === 5) {
      setGameOver({ finish: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currentAttempt.letter === 0) return;
    const newBoard = [...wordlegrid];
    newBoard[currentAttempt.attempt][currentAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currentAttempt, letter: currentAttempt.letter--});
  };

  const onSelectLetter = (key) => {
    if (currentAttempt.letter > 4) return;
    const newBoard = [...wordlegrid];
    newBoard[currentAttempt.attempt][currentAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currentAttempt.attempt,
      letter: currentAttempt.letter++,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          wordlegrid, setBoard,currentAttempt,setCurrAttempt,correctWord,onSelectLetter,onDelete, start,setDisabledLetters,disabledLetters,finish,
        }}
      >
        <div className="game">
          <wordlegrid />
          {finish.finish ? <finish /> : <keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;