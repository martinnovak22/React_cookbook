import React from "react";

interface Props {
  nftsPerPage: number;
  totalNfts: number;
  paginate: (number: number) => void;
}

export function Pagination({ nftsPerPage, totalNfts, paginate }: Props) {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNfts / nftsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={"nft__navbar"}>
      <ul className={"nft__list"}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={"nft__pageButton"}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
