export function formatNumber(number: number) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
  }).format(number);
}

export function checkData(data: string): Error | number {
  const number = parseFloat(data);
  if (isNaN(number)) {
    throw new Error("Zadejte číselnou hodnotu!");
  }

  return number;
}
