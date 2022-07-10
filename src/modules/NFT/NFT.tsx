import "./styles/nft.css";
import React, { useEffect, useState } from "react";
import { NFTList } from "./components/NFTList";
import { NftCardProps } from "./types";
import { Pagination } from "./components/Pagination";
import { useSearchParams } from "react-router-dom";
import { Data } from "./Data";

export function NFT() {
  const [data, setData] = useState<Array<NftCardProps>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams("page=1");
  const NFTS_PER_PAGE = 9;

  // First load of page
  useEffect(() => {
    setIsLoading(true);
    pagination(getCurrentPage());
    setData(Data);
    setIsLoading(false);
  }, []);

  // Page change
  const pagination = (number: number) => {
    searchParams.set("page", number.toString());
    setSearchParams(searchParams);
  };

  // Get current page
  const getCurrentPage = () => {
    return Number(searchParams.get("page"));
  };

  // Get current nfts for page
  const getCurrentNfts = (currentPage: number, nftsPerPage: number) => {
    const indexOfLastNft = currentPage * nftsPerPage;
    const indexOfFirstNft = indexOfLastNft - nftsPerPage;
    return data.slice(indexOfFirstNft, indexOfLastNft);
  };

  return (
    <div className={"nft"}>
      <NFTList
        data={getCurrentNfts(getCurrentPage(), NFTS_PER_PAGE)}
        isLoading={isLoading}
      />

      <Pagination
        currentPage={getCurrentPage()}
        perPage={NFTS_PER_PAGE}
        total={data.length}
        paginate={pagination}
      />
    </div>
  );
}
