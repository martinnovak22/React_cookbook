import { NavLink } from "react-router-dom";

interface NavBarLink {
  to: string;
  children: string;
}

export function NavBarLink({ to, children }: NavBarLink) {
  const activeStyle = {
    backgroundColor: "#1989b7",
  };

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
