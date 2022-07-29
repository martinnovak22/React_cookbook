import { clsx } from "clsx";

interface Props {
  currentPage: number;
  pageNumbers: number[];
}

const mainClass = "nft__pageNumber";
const activeClass = "item-active";

export function Pagination({ currentPage, pageNumbers }: Props) {
  console.log(currentPage);
  return (
    <nav className={"nft__navbar"}>
      <ul className={"nft__pageList"}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              href={`nft-cards?page=${number}`}
              className={clsx(
                {
                  [activeClass]: number === currentPage,
                },
                mainClass
              )}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
