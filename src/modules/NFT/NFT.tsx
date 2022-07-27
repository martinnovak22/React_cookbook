import { useEffect, useState } from "react";
import { Data } from "./Data";
import "./styles/nft.css";

import { NFTList } from "./components/NFTList";
import { Pagination } from "./components/Pagination";
import { useSearchParams } from "react-router-dom";
import { usePagination } from "./hooks/usePagination";
import { GetCurrentPage } from "./utils/PaginationUtils";

export function NFT() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams("page=1");
  const NFTS_PER_PAGE = 9;

  // Current page
  const currentPage = GetCurrentPage(searchParams);

  // Data from pagination (page numbers and current set of items)
  const { pageNumbers, currentSetOfItems } = usePagination(
    Data,
    NFTS_PER_PAGE,
    Data.length,
    currentPage
  );

  // First load of page
  useEffect(() => {
    setIsLoading(true);
    setIsLoading(false);
  }, []);

  return (
    <div className={"routing__container"}>
      <div className={"nft"}>
        <NFTList data={currentSetOfItems} isLoading={isLoading} />

        <Pagination currentPage={currentPage} pageNumbers={pageNumbers} />
      </div>
    </div>
  );
}
