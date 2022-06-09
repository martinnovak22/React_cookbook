import React from "react";
import ResultBlock from "./resultBlock";

//interface for form
export interface calculatorTypes {
  values: { tip: number; bill: number; people: number };
  onValueChange: CallableFunction;
}

const tips = [5, 10, 15, 25, 50];
function CalculatorForm({ values, onValueChange }: calculatorTypes) {
  // function handleCustomTipInput(e: React.FormEvent<HTMLInputElement>): void {
  //   props.onValueChange(e);
  //
  //   //resets radio button check
  //   const tipRadioReset: NodeListOf<HTMLInputElement> =
  //     document.querySelectorAll("input[type=radio]:checked");
  //   if (tipRadioReset.length !== 0) {
  //     tipRadioReset[0].checked = false;
  //   }
  // }
  //
  // function handleTipInput(e: React.FormEvent<HTMLInputElement>): void {
  //   props.onValueChange(e);
  //
  //   //resets custom input when radio button IS checked
  //   const tipCustomReset: NodeListOf<HTMLInputElement> =
  //     document.querySelectorAll("input[class=input__customTip]");
  //   tipCustomReset[0].value = String(0);
  // }

  //selection of text
  // function handleSelect(e: React.FocusEvent<HTMLInputElement>): void {
  //   e.target.select();
  // }

  const tip = () => {
    if (values.people == 0) {
      return 0;
    }
    return ((values.bill / 100) * values.tip) / values.people;
  };

  const total = () => {
    if (values.people == 0) {
      return 0;
    }
    return (values.bill + (values.bill / 100) * values.tip) / values.people;
  };

  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    const targetedInput = event.target as HTMLInputElement;
    const name = targetedInput.name;
    const value = targetedInput.value;
    onValueChange(name, value);
  }

  return (
    <form className={"form__container"} onChange={(e) => handleChange(e)}>
      <div className={"inputs"}>
        <div className={"inputs__inputBox"}>
          <label htmlFor={"input__billInput"} className={"input__label"}>
            Bill
          </label>
          <input
            id={"input__billInput"}
            type="number"
            name="bill"
            defaultValue={0}
            min={0}
            className={"input__num billInput"}
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
                  value={tip}
                  className={"input__radio"}
                />
                <span className={"input__span"}>{tip + "%"}</span>
              </label>
            ))}
            <input
              type={"number"}
              name={"tip"}
              defaultValue={0}
              className={"input__customTip"}
            />
          </div>
        </div>
        <div className={"inputs__inputBox"}>
          <label htmlFor={"input__peopleInput"} className={"input__label"}>
            Number of people
          </label>
          <input
            id={"input__peopleInput"}
            type="number"
            name="people"
            defaultValue={1}
            min={1}
            className={"input__num peopleInput"}
          />
        </div>
      </div>
      <div className={"results"}>
        <ResultBlock title={"Tip amount"} value={tip} />
        <ResultBlock title={"Total amount"} value={total} />
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
