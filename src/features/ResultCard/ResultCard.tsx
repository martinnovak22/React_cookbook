import React from "react";
import "/src/styles/global.css";
import formatNumber from "../../utils/numberFormat.js";
import ResultComponent from "./components/ResultComponent";
import { DEFAULT_VALUES } from "../../Calculator";
import { ResultCardTypes } from "../../types/CalculatorTypes";

import "./styles/ResultCardStyles.css";

const RESULTS = {
  TIP_AMOUNT: "Tip amount",
  TOTAL_AMOUNT: "Total amount",
};

export default function ResultCard(props: ResultCardTypes) {
  const values = props.values;
  let isError: boolean = false;

  function calculateTip(): string {
    if (values.people == 0) {
      isError = true;
      return formatNumber(0);
    }

    return formatNumber(((values.bill / 100) * values.tip) / values.people);
  }

  function calculateTotal(): string {
    if (values.people == 0) {
      return formatNumber(0);
    }
    return formatNumber(
      (values.bill + (values.bill / 100) * values.tip) / values.people
    );
  }

  // complete reset
  function handleReset(): void {
    const formElement: NodeListOf<HTMLFormElement> =
      document.querySelectorAll("form");

    formElement[0].reset();
    props.setValues(DEFAULT_VALUES);
  }

  return (
    <div className={"result-card"}>
      <ResultComponent title={RESULTS.TIP_AMOUNT} calculate={calculateTip()} />
      <ResultComponent
        title={RESULTS.TOTAL_AMOUNT}
        calculate={calculateTotal()}
      />
      <div>
        <p
          style={{
            visibility: isError ? "visible" : "hidden",
            color: "#F55353",
            marginLeft: "15px",
          }}
        >
          Nulou dělit nelze!
        </p>
      </div>
      <input
        type="reset"
        value={"RESET"}
        onClick={handleReset}
        className={"reset-button"}
      />
    </div>
  );
}
