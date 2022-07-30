import { Mock, createRandomNft } from "../mock";

// Can change one number and have more NFTS
export const useMock = (): Mock[] => {
  const arr: Mock[] = [];
  Array.from({ length: 25 }).forEach(() => {
    arr.push(<Mock>createRandomNft());
  });

  return arr;
};
