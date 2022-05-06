import React from "react";
import "/src/App.css";

export default function ResultCard(props: any) {
  const tip: number = props.tip;
  const state: { bill: number; people: number } = props.state;

  // TODO upgrade Error
  let isError: boolean = false;
  let totalPerson: number = 0;
  let tipPerson: number = 0;
  if (state.people === 0) {
    isError = true;
  } else {
    tipPerson = ((state.bill / 100) * tip) / state.people;
    totalPerson = (state.bill + (state.bill / 100) * tip) / state.people;
  }

  console.log(totalPerson);
  return (
    <div className={"result-card"}>
      <div>
        <p>Tip amount</p>
        <output>{isNaN(tipPerson) ? 0 : tipPerson}</output>
      </div>
      <div>
        <p>Total</p>
        <output>{isNaN(totalPerson) ? 0 : totalPerson}</output>
      </div>
      <div>
        {isError ? (
          <p style={{ color: "red" }}>Error, nulou dělit nelze!</p>
        ) : null}
        {isNaN(tip) ? (
          <p style={{ color: "red" }}>Error, zadejte číselnou hodnotu!</p>
        ) : null}
      </div>
    </div>
  );
}
