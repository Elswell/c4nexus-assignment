import { proxy } from "valtio";

interface StoreProps {
  results: number;
  category: string | undefined;
  colors: string[];
  price: { min: number[]; max: number[] };
  priceSort: string;
  alphabeticalSort: string;
}

export const store = proxy<StoreProps>({
  results: 0,
  category: "kitchen-dining",
  colors: [],
  price: { min: [0], max: [100] },
  alphabeticalSort: "",
  priceSort: "",
});
