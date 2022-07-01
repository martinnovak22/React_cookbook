import React from "react";
import { Card } from "./Card";
import { DataObject } from "../types";

interface Props {
  data: Array<DataObject>;
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
