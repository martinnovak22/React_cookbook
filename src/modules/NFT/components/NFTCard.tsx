import ethereum from "../assets/icons/icon-ethereum.svg";
import clock from "../assets/icons/icon-clock.svg";
import profile from "../assets/images/image-avatar.png";

interface Props {
  image: string;
  title: string;
  description: string;
  price: number;
  timeLeft: number;
}

export function NFTCard({ image, title, description, price, timeLeft }: Props) {
  return (
    <div className={"nft__card"}>
      <div>
        <img alt={"nft"} src={image} className={"nft__image"} />
      </div>
      <h1 className={"nft__title"}>{title}</h1>
      <p className={"nft__description"}>{description}</p>
      <div className={"nft__info"}>
        <div className={"nft__info--price"}>
          <img alt={"ethereum"} src={ethereum} className={"nft__ethereum"} />
          <p>{price} ETH</p>
        </div>
        <div className={"nft__info--clock"}>
          <img alt={"clock"} src={clock} className={"nft__clock"} />
          <p>{timeLeft} day/s left</p>
        </div>
      </div>
      <hr className={"nft__lineBreak"} />
      <div className={"nft__creator"}>
        <img
          alt={"profile picture"}
          src={profile}
          className={"nft__creatorProfile"}
        />
        <p>creation of Martin</p>
      </div>
    </div>
  );
}
