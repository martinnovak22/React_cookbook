import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <NavBar />
      <div className={"outletBox"}>
        <Outlet />
      </div>
    </>
  );
}
