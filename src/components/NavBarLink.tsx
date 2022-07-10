import { NavLink } from "react-router-dom";
import { activeStyle } from "../utils/style";

interface NavBarLink {
  to: string;
  children: string;
}

export function NavBarLink({ to, children }: NavBarLink) {
  return (
    <li className={"navbar__item"}>
      <NavLink
        to={to}
        style={({ isActive }) => (isActive ? activeStyle : {})}
        className={"navbar__item-text"}
      >
        {children}
      </NavLink>
    </li>
  );
}
