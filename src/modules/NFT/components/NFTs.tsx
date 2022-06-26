import React from "react";
import { NFTcard } from "./NFTcard";
import { dataObject } from "../types";

interface Props {
  data: Array<dataObject>;
  loading: boolean;
}

export function NFTs({ data, loading }: Props) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={"nft__cardLayout"}>
      {data.map((object) => (
        <NFTcard
          key={object.id}
          image={object.url}
          title={"COOL NFT " + object.id}
          description={object.title}
          price={0.34 + object.id}
          timeLeft={3}
        />
      ))}
    </div>
  );
}
