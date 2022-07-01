import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  perPage: number;
  total: number;
  paginate: (number: number) => void;
}

export function Pagination({ perPage, total, paginate }: Props) {
  let pageNumbers = [];
  let navigate = useNavigate();

  const pageCount = Math.ceil(total / perPage);

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  const goToPage = (number: number) => {
    console.log(number);
    navigate("/nft-cards/" + number);
    paginate(number);
  };

  return (
    <nav className={"nft__navbar"}>
      <ul className={"nft__list"}>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => goToPage(number)}>
            <a className={"nft__pageNumber"}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
