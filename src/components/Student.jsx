import React from "react";
import Score from "./Score";

function Student(props) {
  return (
    <div className="student">
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      <Score scores={props.scores}/>
    </div>
  );
}
export default Student;
