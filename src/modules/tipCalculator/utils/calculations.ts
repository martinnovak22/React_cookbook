type calculationValues = { tip: number; bill: number; people: number };

const tip = (values: calculationValues) => {
  if (values.people == 0) {
    return 0;
  }
  return ((values.bill / 100) * values.tip) / values.people;
};

const total = (values: calculationValues) => {
  if (values.people == 0) {
    return 0;
  }
  return (values.bill + (values.bill / 100) * values.tip) / values.people;
};

export { tip, total };
