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

  function handleFocus(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLTextAreaElement;
    target.select();
  }

  return (
    <form className={"inputs"}>
      <div className={"inputs__inputBox"}>
        <label htmlFor={"input__billInput"} className={"input__label"}>
          Bill
        </label>
        <input
          type="number"
          name="bill"
          id={"input__billInput"}
          className={"input__num billInput"}
          onChange={(e) => props.onValueChange(e)}
          onFocus={handleFocus}
          defaultValue={0}
          min={0}
        />
      </div>
      <div className={"inputs__inputBox"}>
        <label className={"input__label"}>Select tip %</label>
        <div className={"input__tipTable"}>
          {tips.map((tip) => (
            <label key={tip}>
              <input
                type={"radio"}
                name={"tip"}
                className={"input__radio"}
                onChange={(e) => props.onValueChange(e)}
                value={tip}
              />
              <span className={"input__span"}>{tip + "%"}</span>
            </label>
          ))}
          <input
            type={"number"}
            name={"tip"}
            className={"input__customTip"}
            onChange={(e) => props.onValueChange(e)}
            onInput={handleCheckReset}
            onFocus={handleFocus}
            defaultValue={0}
          />
        </div>
      </div>
      <div className={"inputs__inputBox"}>
        <label htmlFor={"input__peopleInput"} className={"input__label"}>
          Number of people
        </label>
        <input
          type="number"
          name="people"
          id={"input__peopleInput"}
          className={"input__num peopleInput"}
          onChange={(e) => props.onValueChange(e)}
          onFocus={handleFocus}
          defaultValue={1}
          min={1}
        />
      </div>
    </form>
  );
}

export default InputCard;
