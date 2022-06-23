import { NFTCard } from "./components/NFTCard";
import "./styles/nft.css";
import equilibrium from "./assets/images/image-equilibrium.jpg";

export function NFT() {
  return (
    <div className={"nft"}>
      <NFTCard
        image={equilibrium}
        title={"Equilibrium #3900"}
        description={
          "some nft description some nft description some nft description"
        }
        price={0.39}
        timeLeft={3}
      />
    </div>
  );
}
