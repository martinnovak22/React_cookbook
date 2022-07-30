import { useEffect, useState } from "react";
import { NftCardProps } from "./types";
import "./styles/nft.css";

import { NFTList } from "./components/NFTList";
import { Pagination } from "./components/Pagination";
import { useSearchParams } from "react-router-dom";
import { usePagination } from "./hooks/usePagination";
import { useMock } from "./hooks/useMock";
import { GetCurrentPage } from "./utils/PaginationUtils";

export function NFT() {
  const [isLoading, setIsLoading] = useState(false);
  const [nfts, setNfts] = useState<NftCardProps[]>([]);
  const [searchParams, setSearchParams] = useSearchParams("page=1");
  const NFTS_PER_PAGE = 9;

  // Current page
  const currentPage = GetCurrentPage(searchParams);

  // Data from pagination (page numbers and current set of items)
  const { pageNumbers, currentSetOfItems } = usePagination(
    nfts,
    NFTS_PER_PAGE,
    nfts.length,
    currentPage
  );

  // Load of component (fake fetch from api)
  useEffect(() => {
    setIsLoading(true);

    const doGetNfts = async () => {
      const result = await useMock();
      setNfts(result);
    };
    setTimeout(() => {
      doGetNfts();
      setIsLoading(false);
    }, 700);
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
