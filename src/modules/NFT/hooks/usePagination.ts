import { GetPageNumbers } from "../utils/PaginationUtils";
import { useMemo } from "react";
import { NftCardProps } from "../types";

export function usePagination(
  data: Array<NftCardProps>,
  perPage: number,
  total: number,
  currentPage: number
): {
  pageNumbers: number[];
  currentSetOfItems: Array<NftCardProps>;
} {
  // getting page numbers
  const pageCount = Math.ceil(total / perPage);
  const pageNumbers: number[] = useMemo(
    () => GetPageNumbers(pageCount),
    [pageCount]
  );

  // getting set of items
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentSetOfItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return { pageNumbers, currentSetOfItems };
}
