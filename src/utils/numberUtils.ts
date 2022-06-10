export function formatNumber(number: number) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
  }).format(number);
}
