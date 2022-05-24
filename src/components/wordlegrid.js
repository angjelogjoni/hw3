import React, { useContext } from "react";
import { AppContext } from "../App";
import letter from "./letter";

function wordlegrid() {
  return (
    <div className="wordlegrid">
      {" "}
      <div className="row">
        <letter letterPos={0} attemptVal={0} />
        <letter letterPos={1} attemptVal={0} />
        <letter letterPos={2} attemptVal={0} />
        <letter letterPos={3} attemptVal={0} />
        <letter letterPos={4} attemptVal={0} />
      </div>
      <div className="row">
        <letter letterPos={0} attemptVal={1} />
        <letter letterPos={1} attemptVal={1} />
        <letter letterPos={2} attemptVal={1} />
        <letter letterPos={3} attemptVal={1} />
        <letter letterPos={4} attemptVal={1} />
      </div>
      <div className="row">
        <letter letterPos={0} attemptVal={2} />
        <letter letterPos={1} attemptVal={2} />
        <letter letterPos={2} attemptVal={2} />
        <letter letterPos={3} attemptVal={2} />
        <letter letterPos={4} attemptVal={2} />
      </div>
      <div className="row">
        <letter letterPos={0} attemptVal={3} />
        <letter letterPos={1} attemptVal={3} />
        <letter letterPos={2} attemptVal={3} />
        <letter letterPos={3} attemptVal={3} />
        <letter letterPos={4} attemptVal={3} />
      </div>
      <div className="row">
        <letter letterPos={0} attemptVal={4} />
        <letter letterPos={1} attemptVal={4} />
        <letter letterPos={2} attemptVal={4} />
        <letter letterPos={3} attemptVal={4} />
        <letter letterPos={4} attemptVal={4} />
      </div>
      <div className="row">
        <letter letterPos={0} attemptVal={5} />
        <letter letterPos={1} attemptVal={5} />
        <letter letterPos={2} attemptVal={5} />
        <letter letterPos={3} attemptVal={5} />
        <letter letterPos={4} attemptVal={5} />
      </div>
    </div>
  );
}

export default wordlegrid;