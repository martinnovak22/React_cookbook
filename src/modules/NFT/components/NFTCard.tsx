import equilibrium from "../assets/images/image-equilibrium.jpg";
import ethereum from "../assets/icons/icon-ethereum.svg";
import clock from "../assets/icons/icon-clock.svg";
import profile from "../assets/images/image-avatar.png";

export function NFTCard() {
  return (
    <div className={"nft__card"}>
      <div>
        <img alt={"equilibrium"} src={equilibrium} className={"nft__image"} />
      </div>
      <h1 className={"nft__title"}>Equilibrium #3900</h1>
      <p className={"nft__description"}>
        Our equilibrium collection promotes calm and chill
      </p>
      <div className={"nft__info"}>
        <div className={"nft__info--price"}>
          <img alt={"ethereum"} src={ethereum} className={"nft__ethereum"} />
          <p>0.41 ETH</p>
        </div>
        <div className={"nft__info--clock"}>
          <img alt={"clock"} src={clock} className={"nft__clock"} />
          <p>3 days left</p>
        </div>
      </div>
      <hr className={"nft__lineBreak"} />
      <div className={"nft__creator"}>
        <img alt={"profile picture"} src={profile} />
        <p>creation of</p>
      </div>
    </div>
  );
}
