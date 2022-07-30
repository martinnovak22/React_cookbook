import ethereum from "../assets/icons/ethereum.svg";
import clock from "../assets/icons/clock.svg";
import profile from "../assets/images/avatar.png";
import view from "../assets/icons/view.svg";
import { NftCardProps } from "../types";

type Props = Omit<NftCardProps, "id">;
export function Card({ image, title, description, price, timeLeft }: Props) {
  return (
    <article className={"nft__card"}>
      <div className={"nft__imageBox"}>
        <img alt={"nft"} src={image} className={"nft__image"} />
        <div className={"nft__imageOverlay"}>
          <img alt={"view icon"} src={view} className={"nft__imageView"} />
        </div>
      </div>

      <h1 className={"nft__title"}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h1>

      <span className={"nft__description"}>{description}</span>

      <section className={"nft__info"}>
        <div className={"nft__info-price"}>
          <img alt={"ethereum"} src={ethereum} className={"nft__ethereum"} />
          <span>{price} ETH</span>
        </div>

        <div className={"nft__info-clock"}>
          <img alt={"clock"} src={clock} className={"nft__clock"} />
          <span>{timeLeft} day/s left</span>
        </div>
      </section>

      <hr className={"nft__lineBreak"} />

      <div className={"nft__creator"}>
        <img
          alt={"profile picture"}
          src={profile}
          className={"nft__creatorProfile"}
        />
        <p>
          Creation of <span className={"nft__creatorName"}>Martin</span>
        </p>
      </div>
    </article>
  );
}
