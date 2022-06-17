import { CalculationValues } from "../types";

const tip = (values: CalculationValues) => {
  if (values.people == 0) {
    return 0;
  }
  return ((values.bill / 100) * values.tip) / values.people;
};

const total = (values: CalculationValues) => {
  if (values.people == 0) {
    return 0;
  }
  return (values.bill + (values.bill / 100) * values.tip) / values.people;
};

export { tip, total };
