import { NavBarLink } from "./NavBarLink";

function NavBar() {
  return (
    <nav className={"navbar"}>
      <ul className={"navbar__list"}>
        <NavBarLink to={"/"}>Home</NavBarLink>
        <NavBarLink to={"/tip-app"}>Tip App</NavBarLink>
        <NavBarLink to={"/nft-cards/1"}>NTF cards</NavBarLink>
      </ul>
    </nav>
  );
}

export { NavBar };
