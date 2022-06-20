import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface CustomLink {
  to: string;
  children: string;
}

export function CustomLink({ to, children }: CustomLink) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "navbar__item--active" : ""}>
      <Link to={to} className={"navbar__item"}>
        {children}
      </Link>
    </li>
  );
}
