import { CustomLink } from "./CustomLink";

function NavBar() {
  return (
    <nav className={"navbar"}>
      <ul className={"navbar__list"}>
        <CustomLink to={"/tip-app"}>Tip App</CustomLink>
        <CustomLink to={"/nft-cards"}>NTF cards</CustomLink>
      </ul>
    </nav>
  );
}

export { NavBar };
