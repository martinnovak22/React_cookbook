import { CustomLink } from "./NavBarLink";

function NavBar() {
  return (
    <nav className={"navbar"}>
      <ul className={"navbar__list"}>
        <CustomLink to={"/"}>Home</CustomLink>
        <CustomLink to={"/tip-app"}>Tip App</CustomLink>
        <CustomLink to={"/nft-cards/1"}>NTF cards</CustomLink>
      </ul>
    </nav>
  );
}

export { NavBar };
