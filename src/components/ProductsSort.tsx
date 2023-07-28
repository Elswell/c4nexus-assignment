/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { Typography } from "./Typography";
import { useSearchParams } from "react-router-dom";

interface ProductsSortProps {}

const ProductsSort: FC<ProductsSortProps> = () => {
  const [, setSearchParams] = useSearchParams();

  const handlePriceSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setSearchParams((prevParams) => ({
      ...prevParams,
      priceSort: value,
    }));
  };

  const handleAlphabeticalSort = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    const value = event.target.value;
    setSearchParams((prevParams) => ({
      ...prevParams,
      alphabeticalSort: value,
    }));
  };

  return (
    <div className="flex w-full justify-end">
      <div className="w-3/4 flex space-x-6">
        <Typography variant="p">Sort By</Typography>
        <select
          onChange={handlePriceSort}
          className="px-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
        >
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>
        <select
          onChange={handleAlphabeticalSort}
          className="px-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsSort;
