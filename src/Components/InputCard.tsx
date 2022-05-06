import React, { useEffect } from "react";
import RadioButton from "./RadioButton";
import "/src/App.css";
function InputCard(props: any) {
  // const [tip, setTip] = React.useState(0);
  // const [state, setState] = React.useState({
  //   bill: 0,
  //   people: 0,
  // });

  const tip = props.tip;
  const state: { bill: number; people: number } = props.state;
  const setState = props.setState;
  const setTip = props.setTip;

  useEffect(() => {
    console.log(state.bill);
    console.log(state.people);
    console.log(tip);
  }, [state.bill, tip, state.people]);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const value = Number(e.currentTarget.value);
    setState({ ...state, [e.currentTarget.name]: value });
  }

  const inputRef1 = React.useRef<HTMLInputElement>(null);
  const inputRef2 = React.useRef<HTMLInputElement>(null);
  function handleSelection(ref: React.RefObject<HTMLInputElement>): void {
    if (ref.current) {
      ref.current.select();
    }
  }

  return (
    <div className={"input-card"}>
      <div>
        <p>Bill</p>
        <input
          type="number"
          name="bill"
          value={state.bill}
          onChange={handleChange}
          onClick={() => handleSelection(inputRef1)}
          ref={inputRef1}
          min={0}
        />
      </div>
      <div>
        <p>Select tip %</p>
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
            placeholder={"Custom"}
            onChange={(e) => setTip(Number(e.currentTarget.value))}
          />
        </div>
      </div>
      <div>
        <p>Number of people</p>
        <input
          type="number"
          name="people"
          value={state.people}
          onChange={handleChange}
          onClick={() => handleSelection(inputRef2)}
          ref={inputRef2}
          min={1}
        />
      </div>
    </div>
  );
}

export default InputCard;
