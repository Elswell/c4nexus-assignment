import { FC } from "react";
import { CategoryData } from "../data/FilterData";
import { useSearchParams } from "react-router-dom";
import { cn } from "../utils/cn";
import { Typography } from "./Typography";
import { ProductData } from "../data/ProductData";
import { store } from "../store/filter";

const CategoryFilter: FC = () => {
  const [searchParams] = useSearchParams();

  const CategoriesEnum: { [key: string]: string } = {
    "kitchen-dining": "Kitchen & Dining",
    "home-decor": "Home Decor",
    cleaning: "Cleaning",
    diy: "DIY",
  };
  const currentCategoryParam = String(searchParams.get("category"));

  const currentProductsLength = ProductData.filter(
    (product) => product.category === currentCategoryParam
  ).length;

  const categoryName = CategoriesEnum[currentCategoryParam];

  return (
    <>
      <div className="flex flex-col dividi-y md:flex-row bg-white dark:bg-transparent dark:border-gray-300 dark:divide-gray-300  w-full mt-8 py-2  justify-between md:divide-x divide-charcoal border border-charcoal">
        {CategoryData.map((data, i) => (
          <div key={`categoryTab${i}`} className="justify-center w-full flex">
            <button
              onClick={() => (store.category = data.param)}
              className={cn(
                currentCategoryParam === data.param
                  ? "text-charcoal font-semibold dark:text-white"
                  : "text-[#5e7783] dark:text-gray-200",
                " w-full"
              )}
            >
              {data.label}
            </button>
          </div>
        ))}
      </div>
      <div className="w-full mt-4">
        <Typography
          variant="h4"
          className="text-charcoal dark:text-gray-300 text-center"
        >
          Browse {currentProductsLength} products in {categoryName}
        </Typography>
      </div>
    </>
  );
};

export default CategoryFilter;
