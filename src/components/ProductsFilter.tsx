import { FC, useEffect, useState, useCallback } from "react";
import { ProductData } from "../data/ProductData";
import { useSearchParams } from "react-router-dom";
import { cn } from "../utils/cn";
import { Typography } from "./Typography";
import { Slider } from "./ui/slider";
import { debounce } from "../utils/debounce";

interface ProductsFilterProps {}

const ProductsFilter: FC<ProductsFilterProps> = () => {
  const allColors = new Set();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState({
    min: [0],
    max: [100],
  });

  // Handle Color Params

  const colorParams = searchParams.get("color");
  const handleColorFilter = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors((prevColors) => prevColors.filter((c) => c !== color));
    } else {
      setSelectedColors((prevColors) => [...prevColors, color]);
    }
  };

  // Handle Price Params

  const handlePriceFilter = useCallback(
    debounce(({ min, max }: { min: number[]; max: number[] }) => {
      setSelectedPrice({ min: min, max: max });
    }, 10), // Adjust the delay as needed
    []
  );

  // Apply Params

  const priceSortParam = searchParams.get("priceSort");
  const alphabeticalSortParam = searchParams.get("alphabeticalSort");

  useEffect(() => {
    const filterParams: {
      color?: string;
      priceSort?: string;
      alphabeticalSort?: string;
      priceMin: string;
      priceMax: string;
    } = {
      priceMin: String(selectedPrice.min[0]),
      priceMax: String(selectedPrice.max[0]),
    };

    if (selectedColors.length > 0) {
      filterParams.color = selectedColors.join(",");
    }

    if (priceSortParam) {
      filterParams.priceSort = priceSortParam;
    }
    if (alphabeticalSortParam) {
      filterParams.alphabeticalSort = alphabeticalSortParam;
    }

    setSearchParams({
      ...filterParams,
    });
  }, [
    selectedPrice,
    selectedColors,
    setSearchParams,
    searchParams,
    priceSortParam,
    alphabeticalSortParam,
  ]);

  return (
    <div className="w-1/4 space-y-16 hidden md:block">
      <div className="flex flex-col space-y-2 items-center justify-center">
        <Typography variant="h4">Colors</Typography>
        {ProductData.map((data, i) => {
          if (!allColors.has(data.color)) {
            allColors.add(data.color);
            return (
              <button
                onClick={() => handleColorFilter(data.color)}
                key={i}
                className={cn(
                  colorParams?.includes(data.color)
                    ? "border-b-[1px] border-b-red-500"
                    : "border-b-[1px] border-b-transparent",
                  "w-1/3"
                )}
              >
                {data.color}
              </button>
            );
          }
          return null;
        })}
      </div>
      <div className="flex flex-col space-y-2 items-center justify-center px-6">
        <Typography variant="h4">Price</Typography>
        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          value={selectedPrice.min}
          onValueChange={(e) => handlePriceFilter({ min: e, max: [100] })}
        />
        <span className="flex justify-between w-full">
          <Typography variant="p">${selectedPrice.min[0]}</Typography>
          <Typography variant="p">${selectedPrice.max[0]}</Typography>
        </span>
      </div>
    </div>
  );
};

export default ProductsFilter;