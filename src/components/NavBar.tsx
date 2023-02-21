import { NavBarLink } from "./NavBarLink";
import { ERoutes } from "../routes/ERoutes";

function NavBar() {
  return (
    <nav className={"navbar"}>
      <ul className={"navbar__list"}>
        <NavBarLink to={ERoutes.HOME}>Home</NavBarLink>
        <NavBarLink to={ERoutes.TIP_APP}>Tip App</NavBarLink>
        <NavBarLink to={ERoutes.NFT_CARDS}>NTF cards</NavBarLink>
        <NavBarLink to={ERoutes.PEXESO}>Pexeso</NavBarLink>
      </ul>
    </nav>
  );
}

export { NavBar };
