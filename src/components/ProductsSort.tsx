/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from "react";
import { Typography } from "./Typography";
import { useSearchParams } from "react-router-dom";

interface ProductsSortProps {}

const ProductsSort: FC<ProductsSortProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceSort, setPriceSort] = useState<string>(
    searchParams.get("priceSort") ?? ""
  );
  const [alphabeticalSort, setAlphabeticalSort] = useState<string>(
    searchParams.get("alphabeticalSort") ?? ""
  );

  useEffect(() => {
    if (!priceSort) return;

    setAlphabeticalSort("");

    setSearchParams((prevParams) => ({
      ...prevParams,
      priceSort: priceSort,
    }));
  }, [priceSort, setSearchParams]);

  useEffect(() => {
    if (!alphabeticalSort) return;

    setPriceSort("");

    setSearchParams((prevParams) => ({
      ...prevParams,
      alphabeticalSort: alphabeticalSort,
    }));
  }, [alphabeticalSort, setSearchParams]);

  return (
    <div className="flex w-full justify-end">
      <div className="w-full md:w-3/4 flex space-x-6">
        <Typography variant="p">Sort By</Typography>
        <select
          onChange={(e) => setPriceSort(e.target.value)}
          value={priceSort}
          defaultValue=""
          className="px-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
        >
          <option value="" disabled>
            Select Price Sort
          </option>
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>
        <select
          onChange={(e) => setAlphabeticalSort(e.target.value)}
          value={alphabeticalSort}
          defaultValue=""
          className="px-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
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
