import React, { useRef } from "react";
import ResultBlock from "./resultBlock";
import InputBlock from "./inputBlock";
import { tip, total } from "../utils/calculations";
import { handleFocus, handleClick } from "../utils/inputBehavior";

// interface for form
export interface calculatorTypes {
  values: { tip: number; bill: number; people: number };
  onValueChange: CallableFunction;
}

// enum with input names
enum inputNames {
  BILL = "bill",
  TIP = "tip",
  PEOPLE = "people",
}

// array for radio button values
const tips = [5, 10, 15, 25, 50];

function CalculatorForm({ values, onValueChange }: calculatorTypes) {
  const customTipInputRef = useRef<HTMLInputElement>(null);

  // handles all value changes
  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    const targetedInput = event.target as HTMLInputElement;
    const name = targetedInput.name;
    const value = targetedInput.value;
    onValueChange(name, value);
  }

  console.log(values);

  return (
    <form className={"form__container"} onChange={(e) => handleChange(e)}>
      <div className={"inputs"}>
        <InputBlock
          title={"Bill"}
          inputName={inputNames.BILL}
          defaultValue={0}
          id={inputNames.BILL + "__id"}
          iconClass={"billInput"}
        />
        <div className={"inputs__inputBox"}>
          <label className={"input__label"}>Select tip %</label>
          <div className={"input__tipTable"}>
            {tips.map((tip) => (
              <label key={tip}>
                <input
                  type={"radio"}
                  name={inputNames.TIP}
                  value={tip}
                  onClick={() => handleClick(customTipInputRef)}
                  className={"input__radio"}
                />
                <span className={"input__span"}>{tip + "%"}</span>
              </label>
            ))}
            <input
              ref={customTipInputRef}
              type={"number"}
              name={inputNames.TIP}
              defaultValue={0}
              onFocus={handleFocus}
              className={"input__customTip"}
            />
          </div>
        </div>
        <InputBlock
          title={"People"}
          inputName={inputNames.PEOPLE}
          defaultValue={1}
          id={inputNames.PEOPLE + "__id"}
          iconClass={"peopleInput"}
        />
      </div>
      <div className={"results"}>
        <ResultBlock title={"Tip amount"} value={tip(values)} />
        <ResultBlock title={"Total amount"} value={total(values)} />
        <div className={"results__errorBox"}>
          <p
            style={{
              visibility: values.people == 0 ? "visible" : "hidden",
            }}
          >
            Nula lidí?!
          </p>
        </div>
        <input
          type="reset"
          value={"RESET"}
          className={"results__reset-button"}
        />
      </div>
    </form>
  );
}

export default CalculatorForm;
