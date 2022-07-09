import "./styles/nft.css";
import React, { useEffect, useState } from "react";
import { NFTList } from "./components/NFTList";
import { NftCardProps } from "./types";
import { Pagination } from "./components/Pagination";
import { useParams } from "react-router-dom";
import { Data } from "./Data";

export function NFT() {
  const [data, setData] = useState<Array<NftCardProps>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  let { pageNumber } = useParams();
  const nftsPerPage = 9;

  useEffect(() => {
    setIsLoading(true);
    setCurrentPage(Number(pageNumber));
    setData(Data);
    setIsLoading(false);
  }, []);

  // Get current nfts for page
  const indexOfLastNft = currentPage * nftsPerPage;
  const indexOfFirstNft = indexOfLastNft - nftsPerPage;
  const currentNfts = data.slice(indexOfFirstNft, indexOfLastNft);

  // Set page
  const pagination = (number: number) => {
    setCurrentPage(number);
  };

  return (
    <div className={"nft"}>
      <NFTList data={currentNfts} isLoading={isLoading} />

      <Pagination
        perPage={nftsPerPage}
        total={data.length}
        paginate={pagination}
      />
    </div>
  );
}
