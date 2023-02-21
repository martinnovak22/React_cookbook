import { NavLink, useLocation } from "react-router-dom";
import { clsx } from "clsx";

interface NavBarLink {
  to: string;
  children: string;
}

const mainClass = "navbar__item-text";
const activeClass = "item-active";

export function NavBarLink({ to, children }: NavBarLink) {
  const currentPage = useLocation();

  if(to==="/menu"){
      return(
          <li className={"navbar__item"}>
              <a href={to} className={"navbar__item-text"}>{children}</a>
          </li>

      )
  }
  return (
    <li className={"navbar__item"}>
      <NavLink
        to={to}
        className={clsx(
          {
            [activeClass]: to === currentPage.pathname,
          },
          mainClass
        )}
      >
        {children}
      </NavLink>
    </li>
  );
}
