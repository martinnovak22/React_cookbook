import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeMenu from "./HomeMenu.jsx";
import GameBoard from "./GameBoard.jsx";
import LevelLayout from "./LevelLayout.jsx";

// default variable for unlocked levels
export const UNLOCKEDLEVELS = {
  priroda: 0,
  technika: 0,
  rodina: 0,
};

function GameApp() {
  // array of played cards
  const [cards, setCards] = useState([]);

  // levels, saved in local storage
  const [levels, setLevels] = useState(() => {
    const saved = localStorage.getItem("levels");
    const initialValue = JSON.parse(saved);
    return initialValue || UNLOCKEDLEVELS;
  });

  // card setter
  const handleCards = (cards) => {
    setCards(cards);
  };

  // level setter
  const handleLevels = (levels) => {
    setLevels(levels);
  };

  // useEffect for storing data in local storage
  useEffect(() => {
    localStorage.setItem("levels", JSON.stringify(levels));
  }, [levels]);

  return (
      <Routes>
        <Route
          path={"/*"}
          element={<HomeMenu levels={levels} handleLevels={handleLevels} />}
        ></Route>
        <Route
          path="/:temaId"
          element={
            <LevelLayout
              handleCards={handleCards}
              handleLevels={handleLevels}
              levels={levels}
            />
          }
        >
          <Route
            path={":level"}
            element={
              <GameBoard
                cards={cards}
                handleCards={handleCards}
                levels={levels}
                handleLevels={handleLevels}
              />
            }
          ></Route>
        </Route>
      </Routes>
  );
}

export default GameApp;
