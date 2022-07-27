import { useEffect, useState } from "react";
import { NftCardProps } from "./types";
import { Data } from "./Data";
import "./styles/nft.css";

import { NFTList } from "./components/NFTList";
import { Pagination } from "./components/Pagination";
import { useSearchParams } from "react-router-dom";

export function NFT() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams("page=1");
  const NFTS_PER_PAGE = 9;

  // First load of page
  useEffect(() => {
    setIsLoading(true);
    getCurrentNfts(Data, getCurrentPage(), NFTS_PER_PAGE);
    setIsLoading(false);
  }, []);

  // Get current page
  const getCurrentPage = () => {
    return Number(searchParams.get("page"));
  };

  // Get current nfts for page
  const getCurrentNfts = (
    data: Array<NftCardProps>,
    currentPage: number,
    nftsPerPage: number
  ) => {
    const indexOfLastNft = currentPage * nftsPerPage;
    const indexOfFirstNft = indexOfLastNft - nftsPerPage;
    return data.slice(indexOfFirstNft, indexOfLastNft);
  };

  return (
    <div className={"routing__container"}>
      <div className={"nft"}>
        <NFTList
          data={getCurrentNfts(Data, getCurrentPage(), NFTS_PER_PAGE)}
          isLoading={isLoading}
        />

        <Pagination
          currentPage={getCurrentPage()}
          perPage={NFTS_PER_PAGE}
          total={Data.length}
        />
      </div>
    </div>
  );
}
