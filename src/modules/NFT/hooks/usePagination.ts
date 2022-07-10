export function usePagination(perPage: number, total: number) {
  let pageNumbers = [];

  const pageCount = Math.ceil(total / perPage);

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
}
