import InputCard from "./Components/InputCard";
import ResultCard from "./Components/ResultCard";
import "./App.css";
import React from "react";

export default function CalcCard() {
  const [tip, setTip] = React.useState(0);
  const [state, setState] = React.useState({
    bill: 0,
    people: 1,
  });

  return (
    <div className={"container"}>
      <InputCard tip={tip} state={state} setState={setState} setTip={setTip} />
      <ResultCard tip={tip} state={state} />
    </div>
  );
}
