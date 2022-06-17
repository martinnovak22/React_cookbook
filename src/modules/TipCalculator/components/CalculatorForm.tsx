import React, { useState, useMemo, useRef } from "react";
import ResultBlock from "./ResultBlock";
import InputBlock from "./InputBlock";
import { tip, total } from "../utils/calculations";
import { CalculationValues } from "../types";
import {
  selectInputOnFocus,
  clearCustomTip,
  clearCheckedRadio,
} from "../utils/inputBehavior";

const DEFAULT_VALUES: CalculationValues = { tip: 0, bill: 0, people: 1 };

// enum with input names
enum InputNames {
  BILL = "bill",
  TIP = "tip",
  PEOPLE = "people",
}

// array for radio button values
const tips = [5, 10, 15, 25, 50];

function CalculatorForm() {
  const [values, setValues] = useState(DEFAULT_VALUES);
  const [error, setError] = useState(false);

  const tipValue = useMemo(() => {
    return tip(values);
  }, [values]);

  const totalValue = useMemo(() => {
    return total(values);
  }, [values]);

  const customTipInputRef = useRef<HTMLInputElement>(null);
  const radioTipInputRef = useRef<HTMLDivElement>(null);

  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    const targetedInput = event.target as HTMLInputElement;
    const name = targetedInput.name;
    const value = Number(targetedInput.value);
    if (value <= 0) {
      setError(true);
      return;
    } else {
      setError(false);
      setValues({ ...values, [name]: value });
    }
  }

  // reset of values
  function handleReset(): void {
    setValues(DEFAULT_VALUES);
  }

  // handles click on radio (setting custom tip to 0)
  function handleRadioButtonClick() {
    clearCustomTip(customTipInputRef);
  }

  // handles input of custom tip
  function handleCustomTipInput(event: React.FormEvent<HTMLInputElement>) {
    const targetedInput = event.target as HTMLInputElement;
    if (targetedInput.value.length < 2) {
      clearCheckedRadio(radioTipInputRef);
    }
  }

  return (
    <form
      className={"tc---form"}
      onChange={(e) => handleChange(e)}
      onReset={handleReset}
    >
      <div className={"tc---form__inputs"}>
        <InputBlock
          id={InputNames.BILL}
          name={InputNames.BILL}
          title={"Bill"}
          defaultValue={DEFAULT_VALUES.bill}
          min={0}
          iconClass={"billInput"}
        />
        <div className={"inputBox"}>
          <label className={"inputBox__label"}>Select tip %</label>
          <div ref={radioTipInputRef} className={"inputBox__tipTable"}>
            {tips.map((tip) => (
              <label key={tip}>
                <input
                  type={"radio"}
                  name={InputNames.TIP}
                  value={tip}
                  onClick={handleRadioButtonClick}
                  className={"tipTable__radio"}
                />
                <span className={"tipTable__span"}>{tip + "%"}</span>
              </label>
            ))}
            <input
              ref={customTipInputRef}
              type={"number"}
              name={InputNames.TIP}
              defaultValue={DEFAULT_VALUES.tip}
              onFocus={selectInputOnFocus}
              onInput={(e) => handleCustomTipInput(e)}
              className={"inputBox__customTip"}
            />
          </div>
        </div>
        <InputBlock
          id={InputNames.PEOPLE}
          name={InputNames.PEOPLE}
          title={"People"}
          defaultValue={DEFAULT_VALUES.people}
          min={1}
          iconClass={"peopleInput"}
        />
      </div>
      <div className={"tc---form__results"}>
        <ResultBlock title={"Tip amount"} value={tipValue} />
        <ResultBlock title={"Total amount"} value={totalValue} />
        <div className={"tc---results__errorBox"}>
          <p className={error ? "visible" : "hidden"}>
            Nesmí to být nula ani méně!
          </p>
        </div>
        <input
          type="reset"
          value={"RESET"}
          className={"tc---results__reset-button"}
        />
      </div>
    </form>
  );
}

export default CalculatorForm;
