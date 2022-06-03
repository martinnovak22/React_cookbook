import InputCard from "./features/InputCard/InputCard";
import ResultCard from "./features/ResultCard/ResultCard";
import "./styles/global.css";
import React from "react";
import logoSvg from "./assets/images/logo.svg";
import { checkData } from "./utils/numberUtils";

const DEFAULT_VALUES = { tip: 0, bill: 0, people: 1 };

export default function Calculator() {
  const [values, setValues] = React.useState(DEFAULT_VALUES);
  const [errorMessage, setErrorMessage] = React.useState("");

  function handleValueChange(e: React.FormEvent<HTMLInputElement>) {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    try {
      const checkedNumber = checkData(value);
      setValues({ ...values, [name]: checkedNumber });
      setErrorMessage("");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setValues({
          ...values,
          [name]: Number(e.currentTarget.defaultValue),
        });
      }
    }
  }

  //reset of values and error message
  function handleReset(): void {
    setValues(DEFAULT_VALUES);
    setErrorMessage("");
  }

  return (
    <form className={"app"} onReset={handleReset}>
      <img src={logoSvg} alt={"logo"} className={"app__logo"} />
      <div className={"app__container"}>
        <InputCard values={values} onValueChange={handleValueChange} />
        <ResultCard values={values} errorMessage={errorMessage} />
      </div>
    </form>
  );
}
