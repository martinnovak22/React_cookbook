import React from "react";
import logoSvg from "../../assets/images/logo.svg";
import CalculatorForm from "./components/calculatorForm";
import "./styles/formStyles.css";
import "../../styles/global.css";

const DEFAULT_VALUES = { tip: 0, bill: 0, people: 1 };

export default function TipCalculator() {
  const [values, setValues] = React.useState(DEFAULT_VALUES);

  function handleValueChange(name: string, value: number) {
    setValues({ ...values, [name]: Number(value) });
  }

  console.log(values);

  //reset of values and error message
  function handleReset(): void {
    setValues(DEFAULT_VALUES);
  }

  return (
    <div className={"app"} onReset={handleReset}>
      <img src={logoSvg} alt={"logo"} className={"app__logo"} />
      <CalculatorForm values={values} onValueChange={handleValueChange} />
    </div>
  );
}
