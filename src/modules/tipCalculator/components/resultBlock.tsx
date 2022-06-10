import React from "react";
import { formatNumber } from "../../../utils/numberUtils";

interface resultTypes {
  title: string;
  value: number;
}
function ResultBlock({ title, value }: resultTypes) {
  const result = formatNumber(value);
  return (
    <div className={"result"}>
      <div className={"result__text"}>
        <h4>{title}</h4>
        <p className={"result__text-mod"}>/ person</p>
      </div>
      <output className={"result__output"}>{result}</output>
    </div>
  );
}

export default ResultBlock;
