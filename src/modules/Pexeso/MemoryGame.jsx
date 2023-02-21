import React from "react";
import GameApp from "./components/GameApp.jsx";

import "./index.css";
import "animate.css";

export function MemoryGame(){
    return(
        <div className={"mg"}>
            <GameApp/>
        </div>
    )
}