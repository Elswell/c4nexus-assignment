import { FC, useCallback } from "react";
import { ProductData } from "../data/ProductData";
import { cn } from "../utils/cn";
import { Typography } from "./Typography";
import { Slider } from "./ui/slider";
import { debounce } from "../utils/debounce";
import { useSnapshot } from "valtio";
import { store } from "../store/filter";
import { produce } from "immer";

const ProductsFilter: FC = () => {
  const { results, colors } = useSnapshot(store);
  const allColors = new Set();

  // Handle Color Params
  const handleColorFilter = (color: string) => {
    if (store.colors?.includes(color)) {
      store.colors = produce(store.colors, (draft) => {
        const index = draft.indexOf(color);
        if (index !== -1) {
          draft.splice(index, 1);
        }
      });
    } else {
      store.colors = produce(store.colors, (draft) => {
        draft.push(color);
      });
    }
  };

  // Handle Price Params
  const handlePriceFilter = useCallback(
    debounce(({ min, max }: { min: number[]; max: number[] }) => {
      store.price = { min: min, max: max };
    }, 10),
    []
  );

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
                  colors?.includes(data.color)
                    ? "text-charcoal dark:text-gray-300 font-bold"
                    : "font-normal",
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
          value={store.price.min}
          onValueChange={(e) => handlePriceFilter({ min: e, max: [100] })}
        />
        <span className="flex justify-between w-full">
          <Typography variant="p">${store.price.min[0]}</Typography>
          <Typography variant="p">${store.price.max[0]}</Typography>
        </span>
      </div>
      <div className="border-charcoal dark:border-gray-300 border-2 text-center p-2">
        <Typography
          variant="span"
          className="text-charcoal dark:text-gray-300 font-semibold"
        >
          Results found: {results}
        </Typography>
      </div>
    </div>
  );
};

export default ProductsFilter;
