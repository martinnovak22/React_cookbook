// Get page numbers
const GetPageNumbers = (pageCount: number) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
};

// Get current page
const GetCurrentPage = (searchParams: URLSearchParams) => {
  return Number(searchParams.get("page"));
};

export { GetCurrentPage, GetPageNumbers };
