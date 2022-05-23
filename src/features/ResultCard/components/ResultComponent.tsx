import React from "react";
import { resultComponentProps } from "../types/ResultCardTypes";

function ResultComponent(props: resultComponentProps) {
  return (
    <div className={"result-box"}>
      <div className={"result-text"}>
        <h4>{props.title}</h4>
        <p style={{ color: "hsl(186, 14%, 56%)" }}>/ person</p>
      </div>
      <output>{props.calculate}</output>
    </div>
  );
}

export default ResultComponent;
