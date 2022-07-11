import equilibrium from "./assets/images/equilibrium.jpg";
import { NftCardProps } from "./types";

function getRandomPrice(min: number, max: number, decimals: number) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
}

export const Data: Array<NftCardProps> = [
  {
    key: 1,
    image: equilibrium,
    title: "Cool NFT 1",
    description:
      "Lorem ipsum dolor sit amet, consecrate disciplining elite. Interpellates in purus ut mi various rhonchus ac eu rises. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 3,
  },
  {
    key: 2,
    image: equilibrium,
    title: "Cool NFT 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 2,
  },
  {
    key: 3,
    image: equilibrium,
    title: "Cool NFT 3",
    description:
      "Lorem ipsum dolor sit amet, consecrate adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 5,
  },
  {
    key: 4,
    image: equilibrium,
    title: "Cool NFT 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 4,
  },
  {
    key: 5,
    image: equilibrium,
    title: "Cool NFT 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 5,
  },
  {
    key: 6,
    image: equilibrium,
    title: "Cool NFT 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 1,
  },
  {
    key: 7,
    image: equilibrium,
    title: "Cool NFT 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 1,
  },
  {
    key: 8,
    image: equilibrium,
    title: "Cool NFT 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 3,
  },
  {
    key: 9,
    image: equilibrium,
    title: "Cool NFT 9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 6,
  },
  {
    key: 10,
    image: equilibrium,
    title: "Cool NFT 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 7,
  },
  {
    key: 11,
    image: equilibrium,
    title: "Cool NFT 11",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 3,
  },
  {
    key: 12,
    image: equilibrium,
    title: "Cool NFT 12",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 2,
  },
  {
    key: 13,
    image: equilibrium,
    title: "Cool NFT 13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 5,
  },
  {
    key: 14,
    image: equilibrium,
    title: "Cool NFT 14",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 4,
  },
  {
    key: 15,
    image: equilibrium,
    title: "Cool NFT 15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 5,
  },
  {
    key: 16,
    image: equilibrium,
    title: "Cool NFT 16",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 1,
  },
  {
    key: 17,
    image: equilibrium,
    title: "Cool NFT 17",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 1,
  },
  {
    key: 18,
    image: equilibrium,
    title: "Cool NFT 18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 3,
  },
  {
    key: 19,
    image: equilibrium,
    title: "Cool NFT 19",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 6,
  },
  {
    key: 20,
    image: equilibrium,
    title: "Cool NFT 20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ut mi varius rhoncus ac eu risus. Phasellus consectetur sagittis velit vel dictum.",
    price: getRandomPrice(0.1, 10, 2),
    timeLeft: 7,
  },
];
