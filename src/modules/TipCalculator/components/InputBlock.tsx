import { selectInputOnFocus } from "../utils/inputBehavior";

interface InputBlockProps {
  title: string;
  name: string;
  defaultValue: number;
  min: number;
  id: string;
  iconClass: string;
}

export default function InputBlock({
  title,
  name,
  defaultValue,
  id,
  iconClass,
  min,
}: InputBlockProps) {
  const classes = "inputBox__num " + iconClass;
  return (
    <div className={"inputBox"}>
      <label htmlFor={id} className={"inputBox__label"}>
        {title}
      </label>
      <input
        id={id}
        type="number"
        name={name}
        defaultValue={defaultValue}
        onFocus={selectInputOnFocus}
        min={min}
        className={classes}
      />
    </div>
  );
}
