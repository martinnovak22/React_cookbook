import { faker } from "@faker-js/faker";

interface Mock {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  timeLeft: number;
}

const MOCK_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consecrate disciplining elite. Interpellates in purus ut mi various rhonchus ac eu rises. ";

// NFT generator
const createRandomNft = (): Mock => {
  return {
    id: faker.datatype.uuid(),
    image: faker.image.abstract(320, 320, true),
    title: faker.random.word(),
    description: MOCK_DESCRIPTION,
    price: Number(faker.finance.amount(0, 10, 2)),
    timeLeft: Number(faker.finance.amount(1, 5, 0)),
  };
};

export { createRandomNft };
export type { Mock };
