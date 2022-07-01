import "./styles/nft.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NFTList } from "./components/NFTList";
import { DataObject } from "./types";
import { Pagination } from "./components/Pagination";
import { useParams } from "react-router-dom";

export function NFT() {
  const [data, setData] = useState<Array<DataObject>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  let { pageNumber } = useParams();
  const nftsPerPage = 9;

  // Fetch all data
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      setCurrentPage(Number(pageNumber));
      setData(res.data);
      setIsLoading(false);
    };
    fetchPosts();
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
