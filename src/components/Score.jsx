import React from "react";

function Score(props) {
  return (
    <div className="scores">
      {props.scores.map((score, index) => (
        <p key={index}>{score.score}</p>
      ))}
    </div>
  );
}
export default Score;
