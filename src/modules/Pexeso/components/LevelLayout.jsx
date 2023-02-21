import { Link, Outlet } from "react-router-dom";
import { getThemeData, shuffleCards } from "../utils/utils.js";

import data from "../assets/data.json";

export default function LevelLayout({ handleCards, levels, handleLevels }) {
  // page url, returns: "/{theme}/{level}" => theme[2] theme[3]
  const theme = window.location.pathname.split("/");
  console.log(theme)

  // function which fills up array with passed data and returns it
  const fillUpArray = (data, value) => {
    const pexesoArray = [];

    getThemeData(data, theme[2], value).map((word) =>
      Object.keys(word.word).forEach((key) => {
        pexesoArray.push({ word: word.word[key], matched: false, id: word.id });
      })
    );

    return shuffleCards(pexesoArray);
  };

  // checks if level is unlocked
  const isUnlocked = (levels, theme, previousLevel) => {
    return !(Number(levels[theme[2]]) >= previousLevel);
  };

  // resets theme
  const handleReset = () => {
    handleLevels({ ...levels, [theme[2]]: 0 });
  };

  return (
    <div className={"App"}>
      <div className={"mainFrame"}>
        <div className={"backLink"}>
          <Link to={"/menu"} className={"noLink"}>
            Zpět na hlavní menu
          </Link>
          <Link to={""} onClick={() => handleReset()} className={"noLink"}>
            Vynulovat toto téma
          </Link>
        </div>
        <div className={"levelBox"}>
          <Link to={"1"}>
            <button
              value={1}
              onClick={(e) =>
                handleCards(fillUpArray(data, e.currentTarget.value))
              }
              className={"levelButton animate__animated animate__zoomIn"}
            >
              Úroveň 1
            </button>
          </Link>

          <Link to={"2"}>
            <button
              value={2}
              onClick={(e) =>
                handleCards(fillUpArray(data, e.currentTarget.value))
              }
              disabled={isUnlocked(levels, theme, 1)}
              className={
                "levelButton animate__animated animate__zoomIn animate__delay-1s"
              }
            >
              Úroveň 2
            </button>
          </Link>

          <Link to={"3"}>
            <button
              value={3}
              onClick={(e) =>
                handleCards(fillUpArray(data, e.currentTarget.value))
              }
              disabled={isUnlocked(levels, theme, 2)}
              className={
                "levelButton animate__animated animate__zoomIn animate__delay-2s"
              }
            >
              Úroveň 3
            </button>
          </Link>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
