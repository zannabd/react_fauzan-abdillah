import { v4 as uuidv4 } from "uuid";

const produk = [
  {
    id: uuidv4(),
    name: "Shampoo",
    category: "2",
    image: "shampoo.jpeg",
    freshness: "Brand New",
    description: "Bahan Pembersih Rambut",
    price: 2,
  },
  {
    id: uuidv4(),
    name: "Sabun",
    category: "2",
    image: "sabun.jpeg",
    freshness: "Brand New",
    description: "Bahan Pembersih Badan",
    price: 2,
  },
];

export default produk;
