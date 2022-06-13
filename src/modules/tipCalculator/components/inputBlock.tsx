import React from "react";
import { handleFocus } from "../utils/inputBehavior";

interface InputBlock {
  title: string;
  inputName: string;
  defaultValue: number;
  id: string;
  iconClass: string;
}

export default function InputBlock({
  title,
  inputName,
  defaultValue,
  id,
  iconClass,
}: InputBlock) {
  const classes = "inputBox__num " + iconClass;
  return (
    <div className={"inputs__inputBox"}>
      <label htmlFor={id} className={"inputBox__label"}>
        {title}
      </label>
      <input
        id={id}
        type="number"
        name={inputName}
        defaultValue={defaultValue}
        onFocus={handleFocus}
        min={defaultValue}
        className={classes}
      />
    </div>
  );
}
