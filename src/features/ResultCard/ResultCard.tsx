import React from "react";
import { formatNumber } from "../../utils/numberUtils.js";
import ResultComponent from "./components/ResultComponent";
import { ResultCardTypes } from "../../types/CalculatorTypes";

import "./styles/ResultCardStyles.css";

const RESULTS = {
  TIP_AMOUNT: "Tip amount",
  TOTAL_AMOUNT: "Total amount",
};

export default function ResultCard(props: ResultCardTypes) {
  const values = props.values;

  //calculates tip per person
  function calculateTip(): string {
    if (values.people == 0) {
      return formatNumber(0);
    }
    return formatNumber(((values.bill / 100) * values.tip) / values.people);
  }

  //calculates total per person
  function calculateTotal(): string {
    if (values.people == 0) {
      return formatNumber(0);
    }
    return formatNumber(
      (values.bill + (values.bill / 100) * values.tip) / values.people
    );
  }

  // complete reset of form
  function handleReset(): void {
    const formElement: NodeListOf<HTMLFormElement> =
      document.querySelectorAll("form[class=app]");
    formElement[0].reset();
  }

  return (
    <div className={"results"}>
      <ResultComponent title={RESULTS.TIP_AMOUNT} calculate={calculateTip()} />
      <ResultComponent
        title={RESULTS.TOTAL_AMOUNT}
        calculate={calculateTotal()}
      />
      <div className={"results__errorBox"}>
        <p
          style={{
            visibility: values.people == 0 ? "visible" : "hidden",
          }}
        >
          Nula lidí?!
        </p>
        <p>{props.errorMessage}</p>
      </div>
      <input
        type="reset"
        value={"RESET"}
        onClick={handleReset}
        className={"results__reset-button"}
      />
    </div>
  );
}
