import React from "react";
import "/src/App.css";

export default function ResultCard(props: any) {
  const tip: number = props.tip;
  const state: { bill: number; people: number } = props.state;
  const setState = props.setState;
  const setTip = props.setTip;

  let isError: boolean = false;

  // calculation handling
  let totalPerson: number = 0;
  let tipPerson: number = 0;
  if (state.people === 0) {
    isError = true;
  } else {
    tipPerson = ((state.bill / 100) * tip) / state.people;
    totalPerson = (state.bill + (state.bill / 100) * tip) / state.people;
  }

  // complete reset
  function handleReset() {
    setState({ bill: 0, people: 1 });
    setTip(0);
  }

  return (
    <div className={"result-card"}>
      <div className={"tip-person"}>
        <div className={"result-text"}>
          <h4>Tip amount</h4>
          <p>/ person</p>
        </div>
        <output>
          {isNaN(tipPerson) ? "$0.00" : "$" + tipPerson.toFixed(2)}
        </output>
      </div>
      <div className={"total-person"}>
        <div className={"result-text"}>
          <h4>Total</h4>
          <p>/ person</p>
        </div>
        <output>
          {isNaN(totalPerson) ? "$0.00" : "$" + totalPerson.toFixed(2)}
        </output>
      </div>
      <div>
        {isError ? (
          <p
            style={{
              color: "red",
              marginLeft: "15px",
              display: "inline-block",
            }}
          >
            Error, nulou dělit nelze!
          </p>
        ) : (
          <p style={{ display: "hidden" }}></p>
        )}
        {isNaN(tip) ? (
          <p
            style={{
              color: "red",
              marginLeft: "15px",
              display: "inline-block",
            }}
          >
            Error, zadejte číselnou hodnotu!
          </p>
        ) : (
          <p style={{ display: "hidden" }}></p>
        )}
      </div>
      <input
        type="reset"
        value={"RESET"}
        onClick={handleReset}
        className={"reset-button"}
      />
    </div>
  );
}
