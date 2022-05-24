import React, { useContext } from "react";
import { AppContext } from "../App";

function Answers({ AnswersVal, Biganswers, Disabled }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (AnswersVal === "ENTER") {
      onEnter();
    } else if (AnswersVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(AnswersVal);
    }
  };
  return (
    <div
      className="answers"
      id={Biganswers ? "big" : Disabled && "disabled"}
      onClick={selectLetter}
    >
      {AnswersVal}
    </div>
  );
}

export default Answers;