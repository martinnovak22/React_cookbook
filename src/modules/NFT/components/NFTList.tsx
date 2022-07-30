import { Card } from "./Card";
import { NftCardProps } from "../types";

interface Props {
  data: NftCardProps[];
  isLoading: boolean;
}

export function NFTList({ data, isLoading }: Props) {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={"nft__cardLayout"}>
      {data.map((object) => (
        <Card
          key={object.id}
          image={object.image}
          title={object.title}
          description={object.description}
          price={object.price}
          timeLeft={object.timeLeft}
        />
      ))}
    </div>
  );
}
