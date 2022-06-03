import React from "react";

import { InputCardTypes } from "../../types/CalculatorTypes";

import "./styles/InputCardStyles.css";

const tips = [5, 10, 15, 25, 50];

function InputCard(props: InputCardTypes) {
  function handleCustomTipInput(e: React.FormEvent<HTMLInputElement>): void {
    props.onValueChange(e);

    //resets radio button check
    const tipRadioReset: NodeListOf<HTMLInputElement> =
      document.querySelectorAll("input[type=radio]:checked");
    if (tipRadioReset.length !== 0) {
      tipRadioReset[0].checked = false;
    }
  }

  function handleTipInput(e: React.FormEvent<HTMLInputElement>): void {
    props.onValueChange(e);

    //resets custom input when radio button IS checked
    const tipCustomReset: NodeListOf<HTMLInputElement> =
      document.querySelectorAll("input[class=input__customTip]");
    tipCustomReset[0].value = String(0);
  }

  //selection of text
  function handleSelect(e: React.FocusEvent<HTMLInputElement>): void {
    e.target.select();
  }

  return (
    <div className={"inputs"}>
      <div className={"inputs__inputBox"}>
        <label htmlFor={"input__billInput"} className={"input__label"}>
          Bill
        </label>
        <input
          type="number"
          name="bill"
          id={"input__billInput"}
          className={"input__num billInput"}
          onInput={(e) => props.onValueChange(e)}
          onFocus={handleSelect}
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
                onChange={handleTipInput}
                value={tip}
              />
              <span className={"input__span"}>{tip + "%"}</span>
            </label>
          ))}
          <input
            type={"number"}
            name={"tip"}
            className={"input__customTip"}
            onInput={handleCustomTipInput}
            onFocus={handleSelect}
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
          onInput={(e) => props.onValueChange(e)}
          onFocus={handleSelect}
          defaultValue={1}
          min={1}
        />
      </div>
    </div>
  );
}

export default InputCard;
