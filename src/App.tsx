import "/src/styles/global.css";
import "./styles/utils.css";
import { NavBar } from "./components/NavBar";
import { TipCalculator } from "./modules/TipCalculator";
import { NFT } from "./modules/NFT/NFT";
import { HomePage } from "./modules/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/tip-app"} element={<TipCalculator />} />
          <Route path={"/nft-cards"} element={<NFT />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
