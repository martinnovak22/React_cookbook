import { usePagination } from "../hooks/usePagination";
import { activeStyle } from "../../../utils/style";

interface Props {
  currentPage: number;
  perPage: number;
  total: number;
}

export function Pagination({ currentPage, perPage, total }: Props) {
  const pageNumbers = usePagination(perPage, total);

  return (
    <nav className={"nft__navbar"}>
      <ul className={"nft__pageList"}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              href={`nft-cards?page=${number}`}
              className={"nft__pageNumber"}
              style={number == currentPage ? activeStyle : {}}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
