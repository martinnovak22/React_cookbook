import "./styles/nft.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NFTs } from "./components/NFTs";
import { dataObject } from "./types";
import { Pagination } from "./components/Pagination";

export function NFT() {
  const [data, setData] = useState<Array<dataObject>>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const nftsPerPage = 9;

  // Get all the data (fetch)
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      setData(res.data);
      setLoading(false);
      setCurrentPage(getPageUrl);
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
    setPageUrl(number);
  };

  // Set page to url
  const setPageUrl = (number: number) => {
    history.pushState(null, "", "/nft-cards/" + number);
  };

  // Get page from url
  const getPageUrl = () => {
    const url = window.location.pathname.split("/");
    return Number(url[url.length - 1]);
  };

  return (
    <div className={"nft"}>
      <Pagination
        nftsPerPage={nftsPerPage}
        totalNfts={data.length}
        paginate={pagination}
      />
      <NFTs data={currentNfts} loading={loading} />
    </div>
  );
}
