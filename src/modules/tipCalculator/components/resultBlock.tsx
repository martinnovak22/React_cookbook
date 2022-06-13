import React from "react";
import { formatNumber } from "../../../utils/numberUtils";

interface resultTypes {
  title: string;
  value: number;
}
function ResultBlock({ title, value }: resultTypes) {
  const result = formatNumber(value);
  return (
    <div className={"results__resultBox"}>
      <div className={"resultBox__text"}>
        <h4>{title}</h4>
        <p className={"resultBox__text-mod"}>/ person</p>
      </div>
      <output className={"resultBox__output"}>{result}</output>
    </div>
  );
}

export default ResultBlock;
