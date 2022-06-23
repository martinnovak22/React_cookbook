import "./styles/homePage.css";
import reactLogo from "./assets/logo.svg";

export function HomePage() {
  return (
    <div className={"HP"}>
      <img alt={"react logo"} src={reactLogo} className={"HP__logo"} />
      <h1 className={"HP__title"}>Kuchařka Reactu</h1>
      <p className={"HP__creator"}>made by: Martin Novák</p>
    </div>
  );
}
