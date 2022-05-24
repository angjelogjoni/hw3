import React, { useContext } from "react";
import { AppContext } from "../App";

function Finish() {
  const {
    Wordlegrid, Setwordlegrid, CurrAttempt, Finish, OnSelectLetter, CorrectWord, OnDelete,
  } = useContext(AppContext);
  return (
   
   
   
   
   
   
   
   
   
   
   
   
   

   
   <div className="finish">
      <h3>
        {Finish.guessedWord
          ? "Correct!"
          : "Incorrect!"}
      </h3>
      <h1>Correct Word: {CorrectWord}</h1>
    </div>
  );
}

export default Finish;