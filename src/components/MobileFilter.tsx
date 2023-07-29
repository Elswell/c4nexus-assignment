import { FC, useCallback } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Typography } from "./Typography";
import { ProductData } from "../data/ProductData";
import { store } from "../store/filter";
import { produce } from "immer";
import { useSnapshot } from "valtio";
import { cn } from "../utils/cn";
import { debounce } from "../utils/debounce";
import { Slider } from "./ui/slider";

interface MobileFilterProps {}

const MobileFilter: FC<MobileFilterProps> = () => {
  const { colors, results } = useSnapshot(store);

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
    <div className="md:hidden w-full flex items-center justify-center">
      <Dialog>
        <DialogTrigger className="py-2 px-8 bg-zinc-700 text-white rounded-md self-center">
          Filters
        </DialogTrigger>
        <DialogContent className="w-2/3">
          <div className="flex flex-col  items-center justify-center">
            <Typography variant="h3">Colors</Typography>
            {ProductData.map((data, i) => {
              if (!allColors.has(data.color)) {
                allColors.add(data.color);
                return (
                  <button
                    key={i}
                    onClick={() => handleColorFilter(data.color)}
                    className={cn(
                      colors?.includes(data.color)
                        ? "text-charcoal font-bold"
                        : "font-normal"
                    )}
                  >
                    {data.color}
                  </button>
                );
              }
              return null;
            })}
          </div>
          <div className="flex flex-col space-y-2 items-center justify-center ">
            <Typography variant="h3">Price</Typography>
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
          <div className="flex flex-col space-y-4 items-center">
            <select
              onChange={(e) => {
                store.priceSort = e.target.value;
                store.alphabeticalSort = "";
              }}
              value={store.priceSort}
              defaultValue=""
              className="w-full px-2 py-2 bg-zinc-700 rounded-lg hover:bg-zinc-900 transition-colors text-white"
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
              className="w-full px-2 py-2 bg-zinc-700 rounded-lg hover:bg-zinc-900 transition-colors text-white"
            >
              <option value="" disabled>
                Select Alphabetical Sort
              </option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </div>
          <div className="border-charcoal border-2 text-center p-2">
            <Typography variant="span" className="text-charcoal font-semibold">
              Results found: {results}
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MobileFilter;
