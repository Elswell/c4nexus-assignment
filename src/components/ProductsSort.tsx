/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { Typography } from "./Typography";
import { store } from "../store/filter";

interface ProductsSortProps {}

const ProductsSort: FC<ProductsSortProps> = () => {
  return (
    <div className="hidden md:flex w-full justify-end">
      <div className="w-full md:w-3/4 flex space-x-6">
        <Typography variant="p">Sort By</Typography>
        <select
          onChange={(e) => {
            store.priceSort = e.target.value;
            store.alphabeticalSort = "";
          }}
          value={store.priceSort}
          defaultValue=""
          className="px-2 bg-zinc-700 rounded-lg hover:bg-zinc-900 transition-colors text-white"
        >
          <option value="" disabled>
            Select Price Sort
          </option>
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>
        <select
          onChange={(e) => {
            store.alphabeticalSort = e.target.value;
            store.priceSort = "";
          }}
          value={store.alphabeticalSort}
          defaultValue=""
          className="px-2 bg-zinc-700 rounded-lg hover:bg-zinc-900 transition-colors text-white"
        >
          <option value="" disabled>
            Select Alphabetical Sort
          </option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsSort;
