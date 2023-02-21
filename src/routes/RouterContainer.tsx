import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HomePage } from "../modules/HomePage/HomePage";
import { TipCalculator } from "../modules/TipCalculator";
import { NFT } from "../modules/NFT/NFT";
import {MemoryGame} from "../modules/Pexeso/MemoryGame"
import { ERoutes } from "./ERoutes";

export function RouterContainer() {
  return (
    <Routes>
      <Route path={ERoutes.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ERoutes.TIP_APP} element={<TipCalculator />} />
        <Route path={ERoutes.NFT_CARDS} element={<NFT />} />
      </Route>
      <Route path={ERoutes.PEXESO} element={<MemoryGame/>}>
      <Route path={"/menu/:temaId"} element={<MemoryGame/>}>
          <Route path={":level"} element={<MemoryGame/>}></Route>
      </Route>

      </Route>
    </Routes>
  );
}
