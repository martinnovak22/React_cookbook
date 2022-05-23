//interface for imput card props
export interface InputCardTypes {
  values: { tip: number; bill: number; people: number };
  onValueChange: Function;
}

//interface for result card props
export interface ResultCardTypes {
  values: { tip: number; bill: number; people: number };
  setValues: Function;
}
