import React, { useCallback, useEffect, useContext } from "react";
import answers from "./answers";
import { AppContext } from "../App";

function Answersboard() {
  const Answerss1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const Answerss2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const Answerss3 = ["A", "B", "C", "D", "E", "F", "G"];

  const {
    Board, DisabledLetters, CurrAttempt, Finish, OnSelectLetter, OnEnter, NDelete,
  } = useContext(AppContext);

  const handleanswersboard = useCallback(
    (event) => {
      if (Finish.finish) return;
      if (event.answers === "Input") {
        OnEnter();
      } else if (event.answers === "Erase") {
        NDelete();
      } else {
        Answerss1.forEach((answers) => {
          if (event.answers.toLowerCase() === answers.toLowerCase()) {
            OnSelectLetter(answers);
          }
        });
        Answerss2.forEach((answers) => {
          if (event.answers.toLowerCase() === answers.toLowerCase()) {
            OnSelectLetter(answers);
          }
        });
        Answerss3.forEach((answers) => {
          if (event.answers.toLowerCase() === answers.toLowerCase()) {
            OnSelectLetter(answers);
          }
        });
      }
    },
    [CurrAttempt]
  );
  useEffect(() => {
    document.addEventListener("answersdown", handleanswersboard);

    return () => {
      document.removeEventListener("answersdown", handleanswersboard);
    };
  }, [handleanswersboard]);

  console.log(DisabledLetters);
  return (
    <div className="answersboard" onanswersDown={handleanswersboard}>
      <div className="line1">
        {Answerss1.map((answers) => {
          return <answers answersVal={answers} disabled={DisabledLetters.includes(answers)} />;
        })}
      </div>
      <div className="line2">
        {Answerss2.map((answers) => {
          return <answers answersVal={answers} disabled={DisabledLetters.includes(answers)} />;
        })}
      </div>
      <div className="line3">
        <answers answersVal={"ENTER"} biganswers />
        {Answerss3.map((answers) => {
          return <answers answersVal={answers} disabled={DisabledLetters.includes(answers)} />;
        })}
        <answers answersVal={"DELETE"} biganswers />
      </div>
    </div>
  );
}

export default Answersboard;