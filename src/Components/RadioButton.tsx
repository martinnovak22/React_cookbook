import React, { Dispatch, SetStateAction } from "react";
import "/src/App.css";

type RadioValue = {
  value: number;
  onTipChange: Dispatch<SetStateAction<number>>;
  isChecked: boolean;
};

export default function RadioButton({
  value,
  onTipChange,
  isChecked,
}: RadioValue) {
  function handleTipChange(e: React.FormEvent<HTMLInputElement>) {
    const newTip: number = Number(e.currentTarget.value);
    onTipChange(newTip);
  }

  return (
    <label>
      <input
        type={"radio"}
        onChange={handleTipChange}
        value={value}
        checked={isChecked}
      />
      <span className={"radio-button"}>{value + "%"}</span>
    </label>
  );
}
