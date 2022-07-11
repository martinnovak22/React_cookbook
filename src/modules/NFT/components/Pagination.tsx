import { usePagination } from "../hooks/usePagination";
import { activeStyle } from "../../../utils/style";

interface Props {
  currentPage: number;
  perPage: number;
  total: number;
  paginate: (number: number) => void;
}

export function Pagination({ currentPage, perPage, total, paginate }: Props) {
  const pageNumbers = usePagination(perPage, total);

  return (
    <nav className={"nft__navbar"}>
      <ul className={"nft__pageList"}>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => paginate(number)}>
            <a
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
