import InputCard from "./features/InputCard/InputCard";
import ResultCard from "./features/ResultCard/ResultCard";
import "./styles/global.css";
import React from "react";
import logoSvg from "./assets/images/logo.svg";

export const DEFAULT_VALUES = { tip: 0, bill: 0, people: 1 };

export default function Calculator() {
  const [values, setValues] = React.useState(DEFAULT_VALUES);

  function handleValueChange(e: React.FormEvent<HTMLInputElement>) {
    const name = e.currentTarget.name;
    const value = Number(e.currentTarget.value);
    setValues({ ...values, [name]: value });
  }

  console.log(values);

  return (
    <div className={"app"}>
      <img src={logoSvg} alt={"logo"} className={"app__logo"} />
      <div className={"app__container"}>
        <InputCard values={values} onValueChange={handleValueChange} />
        <ResultCard values={values} setValues={setValues} />
      </div>
    </div>
  );
}

// TODO renaming, css, začištění kódu
