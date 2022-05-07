import React, { useEffect } from "react";
import RadioButton from "./RadioButton";
import "/src/App.css";
function InputCard(props: any) {
  const tip = props.tip;
  const state: { bill: number; people: number } = props.state;
  const setState = props.setState;
  const setTip = props.setTip;

  // setting state of inputs
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const value = Number(e.currentTarget.value);
    setState({ ...state, [e.currentTarget.name]: value });
  }

  // refs for input selection
  const inputRef1 = React.useRef<HTMLInputElement>(null);
  const inputRef2 = React.useRef<HTMLInputElement>(null);
  const inputRef3 = React.useRef<HTMLInputElement>(null);

  //input selection
  function handleSelection(ref: React.RefObject<HTMLInputElement>): void {
    if (ref.current) {
      ref.current.select();
    }
  }

  return (
    <div className={"input-card"}>
      <div>
        <label htmlFor={"bill-input"} className={"input-label"}>
          Bill
        </label>
        <input
          type="number"
          name="bill"
          value={state.bill}
          onChange={handleChange}
          onClick={() => handleSelection(inputRef1)}
          ref={inputRef1}
          min={0}
          className={"input-num"}
          id={"bill-input"}
        />
      </div>
      <div>
        <label className={"input-label"}>Select tip %</label>
        <div className={"tip-table"}>
          <RadioButton value={5} onTipChange={setTip} isChecked={tip === 5} />
          <RadioButton value={10} onTipChange={setTip} isChecked={tip === 10} />
          <RadioButton value={15} onTipChange={setTip} isChecked={tip === 15} />
          <RadioButton value={25} onTipChange={setTip} isChecked={tip === 25} />
          <RadioButton value={50} onTipChange={setTip} isChecked={tip === 50} />
          <input
            className={"tip-input"}
            type={"text"}
            name={"tip"}
            value={tip ? tip : "Custom"}
            ref={inputRef2}
            onClick={() => handleSelection(inputRef2)}
            onChange={(e) => setTip(Number(e.currentTarget.value))}
          />
        </div>
      </div>
      <div>
        <label htmlFor={"people-input"} className={"input-label"}>
          Number of people
        </label>
        <input
          type="number"
          name="people"
          value={state.people}
          onChange={handleChange}
          onClick={() => handleSelection(inputRef3)}
          ref={inputRef3}
          min={1}
          className={"input-num"}
          id={"people-input"}
        />
      </div>
    </div>
  );
}

export default InputCard;
