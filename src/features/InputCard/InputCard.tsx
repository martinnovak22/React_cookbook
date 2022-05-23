import React from "react";

import { InputCardTypes } from "../../types/CalculatorTypes";

import "./styles/InputCardStyles.css";

const tips = [5, 10, 15, 25, 50];

function InputCard(props: InputCardTypes) {
  function handleCheckReset(): void {
    const tipReset: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      "input[type=radio]:checked"
    );
    if (tipReset.length !== 0) {
      tipReset[0].checked = false;
    }
  }

  return (
    <form className={"input-card"}>
      <div>
        <label htmlFor={"bill-input"} className={"input-label"}>
          Bill
        </label>
        <input
          type="number"
          name="bill"
          defaultValue={0}
          onChange={(e) => props.onValueChange(e)}
          min={0}
          className={"input-num"}
          id={"bill-input"}
        />
      </div>
      <div>
        <label className={"input-label"}>Select tip %</label>
        <div className={"tip-table"}>
          {tips.map((tip) => (
            <label key={tip}>
              <input
                type={"radio"}
                onChange={(e) => props.onValueChange(e)}
                value={tip}
                name={"tip"}
              />
              <span className={"radio-button"}>{tip + "%"}</span>
            </label>
          ))}
          <input
            className={"tip-input"}
            type={"number"}
            name={"tip"}
            defaultValue={0}
            onChange={(e) => props.onValueChange(e)}
            onInput={handleCheckReset}
          />
        </div>
      </div>
      <div>
        <label htmlFor={"people-input"} className={"input-label"}>
          Number of people
        </label>
        <input
          type="number"
          name="people"
          onChange={(e) => props.onValueChange(e)}
          defaultValue={1}
          min={1}
          className={"input-num"}
          id={"people-input"}
        />
      </div>
    </form>
  );
}

export default InputCard;
