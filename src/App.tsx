import "/src/styles/global.css";
import "./styles/utils.css";
import { NavBar } from "./components/NavBar";
import { TipCalculator } from "./modules/TipCalculator";
import { Route, Routes } from "react-router-dom";
import { NFT } from "./modules/NFT/NFT";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path={"/tip-app"} element={<TipCalculator />} />
          <Route path={"/nft-cards"} element={<NFT />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
