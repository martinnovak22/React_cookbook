import React from "react";
import { resultComponentProps } from "../types/ResultCardTypes";

function ResultComponent(props: resultComponentProps) {
  return (
    <div className={"result"}>
      <div className={"result__text"}>
        <h4>{props.title}</h4>
        <p className={"result__text-mod"}>/ person</p>
      </div>
      <output className={"result__output"}>{props.calculate}</output>
    </div>
  );
}

export default ResultComponent;
